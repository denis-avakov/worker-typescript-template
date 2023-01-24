/**
 * ヾ(๑╹◡╹)ﾉ"
 *
 * Welcome to Cloudflare Workers!
 *
 * - Rename the `wrangler.example.toml` to `wrangler.toml` and populate the variables
 * - Run `pnpm run dev` in your terminal to start a development server
 * - Open a browser at http://127.0.0.1:8787/ to see your worker in action
 * - Make HTTP requests to `/cdn-cgi/mf/scheduled` to trigger scheduled events
 *
 * Learn more at:
 * - https://developers.cloudflare.com/workers
 * - https://honojs.dev
 * - https://miniflare.dev
 */

import { Hono } from 'hono';
import { logger } from 'hono/logger';
import { prettyJSON } from 'hono/pretty-json';
import { createError } from '~/utils';

const app = new Hono<{ Bindings: Bindings }>();

app.use('*', logger());
app.use('*', prettyJSON());

app.get('/', async (context) => {
  console.log('env', context.env.EXAMPLE_ENVIRONMENT_VARIABLE);
  console.log('kv', await context.env?.EXAMPLE_KV_NAMESPACE?.get('key'));

  return context.text('Hono!!');
});

app.notFound((context) => {
  return createError(context, 404);
});

app.onError((error, context) => {
  return createError(context, 500);
});

const cronTrigger = async (controller?: ScheduledController, env?: Bindings) => {
  console.log('env', env?.EXAMPLE_ENVIRONMENT_VARIABLE);
  console.log('kv', await env?.EXAMPLE_KV_NAMESPACE?.get('key'));

  console.log('Doing something scheduled...');
};

export default {
  fetch: app.fetch,
  scheduled: cronTrigger
};
