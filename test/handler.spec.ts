import { handleRequest } from '../src/handler';

test('responds with url', async () => {
  const request = new Request('http://localhost/');
  const response = await handleRequest(request);

  expect(response.status).toEqual(200);
  expect(await response.text()).toEqual('Request method: GET');
});
