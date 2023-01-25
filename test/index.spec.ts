import { expect, test, describe } from 'vitest';
import worker from '../src';

declare global {
  function getMiniflareBindings(): Bindings;
}

const env = getMiniflareBindings();

describe.concurrent('worker fetch events', () => {
  const fetchWorker = (target: string) => {
    return worker.fetch(new Request(target), env);
  };

  test('GET / is ok', async () => {
    const response = await fetchWorker('http://127.0.0.1:8787/');

    expect(response.status).toBe(200);
    expect(await response.text()).toEqual('Hono!!');
  });

  test('GET /404 is not found', async () => {
    const response = await fetchWorker('http://127.0.0.1:8787/404');

    expect(response.status).toBe(404);
    expect(await response.json()).toEqual({ status: 404, statusText: 'Not Found' });
  });
});

describe.concurrent('worker scheduled events', () => {
  test('responds on scheduled event', async () => {
    const response = await worker.scheduled();
    expect(response).toBeUndefined();
  });
});
