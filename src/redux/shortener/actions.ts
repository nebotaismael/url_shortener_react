export const SHORTEN_URL_REQUEST = 'SHORTEN_URL_REQUEST';
export const SHORTEN_URL_SUCCESS = 'SHORTEN_URL_SUCCESS';
export const SHORTEN_URL_FAILURE = 'SHORTEN_URL_FAILURE';

export const shortenUrlRequest = (originalUrl: string) => ({
  type: SHORTEN_URL_REQUEST,
  payload: originalUrl,
});

export const shortenUrlSuccess = (shortenedUrl: string) => ({
  type: SHORTEN_URL_SUCCESS,
  payload: shortenedUrl,
});

export const shortenUrlFailure = (error: string) => ({
  type: SHORTEN_URL_FAILURE,
  payload: error,
});