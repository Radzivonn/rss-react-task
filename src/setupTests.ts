import matchers from '@testing-library/jest-dom/matchers';
import { expect } from 'vitest';
import { server } from './test/mock/server';

expect.extend(matchers);

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});
