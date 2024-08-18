export const RAGMAN_BACKEND_HOST =
  // process.env.RAGMAN_BACKEND_HOST || 'http://localhost:4000';
  process.env.RAGMAN_BACKEND_HOST || 'http://127.0.0.1:4000';

export const RAGMAN_API_KEY =
  process.env.RAGMAN_API_KEY || '123';

export const NEXT_PUBLIC_MAX_LENGTH =
  parseInt(process.env.NEXT_PUBLIC_MAX_LENGTH || '1000');

export const NEXT_PUBLIC_COMMENT_MAX_LENGTH =
  parseInt(process.env.NEXT_PUBLIC_COMMENT_MAX_LENGTH || '1000');