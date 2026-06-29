// Fonction serverless Vercel — reçoit le formulaire de contact et crée le lead dans GoHighLevel.
// Le token GHL reste côté serveur (variable d'environnement), jamais exposé au navigateur.

const GHL_BASE = 'https://services.leadconnectorhq.com'
const GHL_VERSION = '2021-07-28'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const token = process.env.GHL_TOKEN
  const locationId = process.env.GHL_LOCATION_ID
  if (!token || !locationId) {
    return res.status(500).json({ error: 'Configuration GHL manquante' })
  }

  // Vercel parse déjà le JSON dans req.body pour les fonctions Node.
  const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body || {}
  const { prenom, nom, courriel, telephone, sujet, message } = body

  if (!prenom || !nom || !courriel || !telephone) {
    return res.status(400).json({ error: 'Champs requis manquants' })
  }

  // Tag de pipeline selon le sujet choisi
  const sujetLower = (sujet || '').toLowerCase()
  const tags = ['Site Web - Lead']
  if (sujetLower.includes('vend')) tags.push('Vendeur')
  else if (sujetLower.includes('achet')) tags.push('Acheteur')

  const headers = {
    Authorization: `Bearer ${token}`,
    Version: GHL_VERSION,
    'Content-Type': 'application/json',
    Accept: 'application/json',
  }

  try {
    // 1. Créer / mettre à jour le contact
    const upsertRes = await fetch(`${GHL_BASE}/contacts/upsert`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        locationId,
        firstName: prenom,
        lastName: nom,
        email: courriel,
        phone: telephone,
        source: 'Site Web cropsal.com',
        tags,
      }),
    })

    const upsertData = await upsertRes.json()
    if (!upsertRes.ok) {
      console.error('GHL upsert error:', upsertData)
      return res.status(502).json({ error: 'Erreur GHL', detail: upsertData })
    }

    const contactId = upsertData?.contact?.id

    // 2. Ajouter le sujet + message comme note (pour que Van le voie)
    if (contactId && (sujet || message)) {
      const noteBody = [sujet ? `Sujet : ${sujet}` : null, message ? `Message : ${message}` : null]
        .filter(Boolean)
        .join('\n')
      await fetch(`${GHL_BASE}/contacts/${contactId}/notes`, {
        method: 'POST',
        headers,
        body: JSON.stringify({ body: noteBody, userId: contactId }),
      }).catch((e) => console.error('Note error (non bloquant):', e))
    }

    return res.status(200).json({ ok: true, contactId })
  } catch (err) {
    console.error('Handler error:', err)
    return res.status(500).json({ error: 'Erreur serveur' })
  }
}
