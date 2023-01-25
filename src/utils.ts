import { getStatusText, type StatusCode } from 'hono/utils/http-status';
import { type Context } from 'hono';

export const createError = (context: Context, status: StatusCode, message?: string) => {
  return context.json(
    {
      status,
      statusText: message ?? getStatusText(status)
    },
    status
  );
};
