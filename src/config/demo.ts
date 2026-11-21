/** Ephemeral demos portal (book a school demo). */
export const DEMO_PORTAL_BASE = 'https://portal.demo.forfellow.net'

export function demoPortalUrl(lang?: string): string {
  const raw = String(lang || 'fr').toLowerCase().split('-')[0]
  const code = ['fr', 'en', 'ar'].includes(raw) ? raw : 'fr'
  return `${DEMO_PORTAL_BASE}/${code}`
}
