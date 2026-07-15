/**
 * Supporter-model integration point (monetization).
 *
 * imagemagic's value proposition is a strict, public privacy promise: no
 * cookies, no localStorage, no analytics, no backend (see README). This module
 * implements the ONLY monetization surface that preserves that promise — a
 * single external supporter link (donation / pay-what-you-want). It adds no
 * persistence, no account, no server call, and no feature gating; it is just a
 * link out to a payment page the Founder provisions.
 *
 * FOUNDER PROVISIONING (the one thing to set):
 *   Replace SUPPORT_CONFIG.url below with a real supporter checkout page AND
 *   flip SUPPORT_CONFIG.enabled to true. It ships disabled (false) because the
 *   url is a stub — do not enable until a real checkout page is in place. Any of:
 *     - Ko-fi / Buy Me a Coffee / GitHub Sponsors  (simplest)
 *     - Stripe Payment Link                         (pay-what-you-want)
 *     - Paddle / Lemon Squeezy                      (Merchant of Record; EU VAT)
 *   No SDK is loaded, so the strict CSP (default-src 'self') needs no change —
 *   SupportCTA renders a plain <a target="_blank" rel="noopener noreferrer">.
 *
 * UPGRADE PATH (not built here): swap this link for a one-time Pro unlock by
 *   pointing `url` at a license-issuing checkout and adding client-side license
 *   verification (Web Crypto Ed25519 + embedded pubkey, key in localStorage).
 *   That softens the "no localStorage" promise and is a Founder decision; see
 *   notes/imagemagic-monetization-decision.md.
 */

export interface SupportConfig {
  /** Supporter checkout URL. STUB — replace before deploy. */
  url: string;
  /** Provider label (used for analytics-free logging if ever needed). */
  provider: string;
  /** When false, SupportCTA renders nothing. */
  enabled: boolean;
}

// FOUNDER PROVISIONING: replace `url` with a real supporter page AND flip
// `enabled` to true before deploy. Ships disabled — the url below is a stub.
export const SUPPORT_CONFIG: SupportConfig = {
  url: 'https://example.com/support-colibrious',
  provider: 'Support',
  enabled: false,
};
