function apiCallSuccess(prefix: string, payload: object) {
  return {
    type: `API_CALL_SUCCESS_${prefix}`,
    payload,
  };
}

export { apiCallSuccess };
