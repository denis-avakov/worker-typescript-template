/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `pnpm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `pnpm run publish` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
  async fetch(request?: Request, env?: Bindings) {
    if (env) {
      console.log('_', await env.EXAMPLE_ENVIRONMENT_VARIABLE);
      console.log('_', await env.EXAMPLE_KV_NAMESPACE.get('key'));
    }

    return new Response('Hello Miniflare!');
  },
  async scheduled(controller?: ScheduledController, env?: Bindings) {
    if (env) {
      console.log('_', await env.EXAMPLE_ENVIRONMENT_VARIABLE);
      console.log('_', await env.EXAMPLE_KV_NAMESPACE.get('key'));
    }

    console.log('Doing something scheduled...');
  }
};
