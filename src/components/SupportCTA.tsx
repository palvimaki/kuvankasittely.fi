import { Heart } from 'lucide-react';
import { useStrings } from '../i18n/useStrings';
import { SUPPORT_CONFIG } from '../monetization/support';

/**
 * Supporter call-to-action — imagemagic's only monetization surface.
 *
 * A small, always-visible footer link to a supporter page. It never gates
 * features, stores nothing (no localStorage/cookies), and makes no network
 * request of its own — a plain link out, so the app's privacy promise and CSP
 * are untouched. See ../monetization/support for provisioning.
 */
export const SupportCTA = () => {
  const t = useStrings();
  if (!SUPPORT_CONFIG.enabled) return null;

  return (
    <a
      href={SUPPORT_CONFIG.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.supportAria}
      title={t.supportThanks}
      className="inline-flex items-center gap-1.5 rounded-full border border-charcoal/10 bg-white px-3 py-1 font-semibold text-charcoal/70 hover:border-auburn/40 hover:text-auburn transition-colors"
    >
      <Heart className="h-3.5 w-3.5 text-auburn" />
      {t.supportCta}
    </a>
  );
};
