/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `pnpm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `pnpm run publish` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

import { Hono } from 'hono';
import { logger } from 'hono/logger';
import { prettyJSON } from 'hono/pretty-json';
import { createError } from '~/utils';

const app = new Hono<{ Bindings: Bindings }>();

app.use('*', logger());
app.use('*', prettyJSON());

app.get('/', async (context) => {
  const EXAMPLE_KV_NAMESPACE = await context.env.EXAMPLE_KV_NAMESPACE.get('key');

  console.log('_', context.env.EXAMPLE_ENVIRONMENT_VARIABLE);
  console.log('_', EXAMPLE_KV_NAMESPACE);

  return context.text('Hono!!');
});

app.notFound((context) => {
  return createError(context, 404);
});

app.onError((error, context) => {
  return createError(context, 500);
});

async function scheduled(controller?: ScheduledController, env?: Bindings) {
  if (env) {
    const EXAMPLE_KV_NAMESPACE = await env.EXAMPLE_KV_NAMESPACE.get('key');

    console.log('_', env.EXAMPLE_ENVIRONMENT_VARIABLE);
    console.log('_', EXAMPLE_KV_NAMESPACE);
  }

  console.log('Doing something scheduled...');
}

export default {
  fetch: app.fetch,
  scheduled
};
