import { getStatusText } from 'hono/utils/http-status';

import type { Context } from 'hono';
import type { StatusCode } from 'hono/utils/http-status';

export function createError(context: Context, status: StatusCode, message?: string) {
  return context.json({ status, statusText: message ?? getStatusText(status) }, status);
}

export function createLog(context: Context, message: string) {
  console.log(message, {
    city: context.req.cf?.city,
    country: context.req.cf?.country
  });
}
