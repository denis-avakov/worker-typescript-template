import { getStatusText } from 'hono/utils/http-status';

import { type Context } from 'hono';
import { type StatusCode } from 'hono/utils/http-status';

export const createError = (context: Context, status: StatusCode, message?: string) => {
  return context.json(
    {
      status,
      statusText: message ?? getStatusText(status)
    },
    status
  );
};
