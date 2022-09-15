import { describe, expect, test } from 'vitest';
import API from '../src';

describe.concurrent('worker integration tests', () => {
  test('responds on HTTP request', async () => {
    const request = new Request('http://localhost');
    const response = await API.fetch(request);

    expect(await response.text()).toBe('Hello Miniflare!');
  });

  test('responds on scheduled event', async () => {
    const response = await API.scheduled();
    expect(response).toBeUndefined();
  });
});
