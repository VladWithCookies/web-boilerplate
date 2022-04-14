import '@testing-library/jest-dom/extend-expect';

import { server } from './src/utils/tests/requestInterceptor';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
