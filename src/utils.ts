import { type Context } from 'hono';

export const createError = (context: Context, status: number, message?: string) => {
  const body = {
    status,
    statusText: message ?? 'Massive error has occurred 🤯🔌'
  };

  return context.json(body, status);
};
