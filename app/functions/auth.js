const axios = require('axios');

exports.handler = async function (event, context) {
  const code = event.queryStringParameters.code || '';
  const state = event.queryStringParameters.state || '';

  if (!code || !state) {
    return {
      statusCode: 302,
      headers: {
        Location: 'https://collibra.softsoft.dev',
      },
    };
  }

  try {
    const response = await axios.post(process.env.DRIBBLE_URL, {
      client_id: process.env.DRIBBLE_CLIENT_ID,
      client_secret: process.env.DRIBBLE_SECRET_ID,
      code: code,
    });
    return {
      statusCode: 302,
      headers: {
        Location: 'https://collibra.softsoft.dev',
        'Set-Cookie': `auth_token_data=${JSON.stringify(
          response.data,
        )}; Path=/; Max-Age=3600`,
      },
    };
  } catch (error) {
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Hello World' }),
    };
  }
};
