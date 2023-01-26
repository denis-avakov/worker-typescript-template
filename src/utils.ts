import { getStatusText, type StatusCode } from 'hono/utils/http-status';
import { type Context } from 'hono';

export const createError = (context: Context, status: StatusCode, message?: string) => {
  const body = {
    status,
    statusText: message ?? getStatusText(status)
  };

  return context.json(body, status);
};
