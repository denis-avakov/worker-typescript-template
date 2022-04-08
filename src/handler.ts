export async function handleRequest(request: Request): Promise<Response> {
  console.log('_ vars', EXAMPLE_ENVIRONMENT_VARIABLE);
  console.log('_ kv', await EXAMPLE_KV_NAMESPACE.get('EXAMPLE_VARIABLE'));

  return new Response(`Request method: ${request.method}`);
}
