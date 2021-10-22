import vars from './vars';

export async function handleRequest(request: Request): Promise<Response> {
  console.log('_ vars', vars.EXAMPLE_ENVIRONMENT_VARIABLE);
  console.log('_ kv', await FOSSABOT.get('EXAMPLE_KV'));

  return new Response(`Request method: ${request.method}`);
}
