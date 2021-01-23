function apiCallFailed(prefix: string, payload: object) {
  return {
    type: `API_CALL_FAILED_${prefix}`,
    payload,
  };
}

export { apiCallFailed };
