require('dotenv').config();
const axios = require('axios');

exports.handler = async function (event, context) {
  const error = event.queryStringParameters.error || '';

  if (error) {
    const qs = new URLSearchParams('');
    for (const k in event.queryStringParameters) {
      qs.append(k, event.queryStringParameters[k]);
    }

    return {
      statusCode: 302,
      headers: {
        Location: `/error?${qs}`,
      },
    };
  }

  const code = event.queryStringParameters.code || '';
  const state = event.queryStringParameters.state || '';

  if (!code || !state) {
    return {
      statusCode: 302,
      headers: {
        Location: '/',
      },
    };
  }

  try {
    const response = await axios.post(process.env.DRIBBLE_URL, {
      client_id: process.env.DRIBBLE_CLIENT_ID,
      client_secret: process.env.DRIBBLE_SECRET_ID,
      code: code,
    });

    const tokenData = JSON.stringify(response.data);
    console.log(tokenData);
    return {
      statusCode: 302,
      headers: {
        Location: '/app',
        'Set-Cookie': `auth_token_data=${tokenData}; Path=/; Max-Age=3600`,
      },
    };
  } catch (error) {
    return {
      statusCode: 302,
      headers: {
        Location: '/error',
      },
    };
  }
};
