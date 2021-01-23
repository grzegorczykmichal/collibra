function apiCallPending(prefix: string) {
  return {
    type: `API_CALL_PENDING_${prefix}`,
  };
}

export { apiCallPending };
