exports.handler = async function (event, context) {
  return {
    statusCode: 302,
    headers: {
      Location: '/',
      'Set-Cookie': `auth_token_data=deleted; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`,
    },
  };
};
