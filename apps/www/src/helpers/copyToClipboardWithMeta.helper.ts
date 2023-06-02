import type { Event } from '../types';
import { trackEvent } from '../utils';

const copyToClipboardWithMeta = async (value: string, event?: Event) => {
  await navigator.clipboard.writeText(value);

  if (event) trackEvent(event);
};

export default copyToClipboardWithMeta;
