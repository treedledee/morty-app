export const API_ROOT = Object.freeze({
  ROOT: 'api.imgur.com',
});

export const API_PATHS = Object.freeze({
  SUBREDDIT_GALLERY: '/3/gallery/r/aww/top/day/1',
});

export const CLIENT_ID = Object.freeze({
  ID: 'c7fd9e46b4c809c',
});

export const IMAGES_API = Object.freeze({
  IMAGES_OPTIONS: {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Client-ID c7fd9e46b4c809c',
    },
  },
  IMAGES_URL: 'https://api.imgur.com/3/gallery/r/aww/hot/day/1',
});

export const HTTP = Object.freeze({
  STATUS: {
    OK: 200,
    MULTIPLE_CHOICES: 300,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500,
  },
  REQUEST_METHOD: {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE',
  },
  HEADER_FIELD: {
    CONTENT_TYPE: 'Content-Type',
    AUTHORIZATION: 'Authorization',
    X_SATI: 'X-SATI',
  },
  MIME_TYPE: {
    JSON: 'application/json',
  },
  CREDENTIALS: 'credentials',
  SAME_ORIGIN: 'same-origin',
});
