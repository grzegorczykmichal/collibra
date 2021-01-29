import { Action } from 'redux';

export type ApiCallAction = Action<'API_CALL'> & {
  payload: Partial<ApiCallOptions>;
};

type ApiCallOptions = {
  url: string;
  prefix: string;
};

function apiCall(options: ApiCallOptions): ApiCallAction {
  return {
    type: 'API_CALL',
    payload: options,
  };
}

export { apiCall };
