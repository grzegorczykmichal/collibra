import { AnyAction, Middleware } from 'redux';
import { ApiCallAction } from './apiCall';
import { apiCallSuccess } from './apiCallSuccess';
import { apiCallFailed } from './apiCallFailed';
import { apiCallPending } from './apiCallPending';

function apiCallMiddleware(): Middleware<AnyAction> {
  return function ({ dispatch }) {
    return function (next) {
      return async function (action: ApiCallAction) {
        if (action.type !== 'API_CALL') {
          next(action);
          return;
        }

        if (!action.payload.url) {
          throw Error('Url not provided');
        }

        dispatch(apiCallPending(action.payload.prefix!));

        fetch(action.payload.url).then(
          async (response) => {
            // Check Content-Type and process response accordingly
            // Assuming is application/json or another compatible
            const json = await response.json();
            dispatch(apiCallSuccess(action.payload.prefix!, json));
          },
          async (error) => {
            dispatch(apiCallFailed(action.payload.prefix!, error));
          },
        );
      };
    };
  };
}

export { apiCallMiddleware };
