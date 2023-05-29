import type { z } from 'zod';

import type { eventSchema } from '~/schemas';

type Event = z.infer<typeof eventSchema>;

export default Event;
