import va from '@vercel/analytics';

import { eventSchema } from '~/schemas';
import type { Event } from '~/types';

const trackEvent = (input: Event): void => {
  const event = eventSchema.parse(input);

  if (event) va.track(event.name, event.properties);
};

export default trackEvent;
