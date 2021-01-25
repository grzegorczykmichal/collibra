import axios from 'axios';

exports.handler = async function (event, context) {
  const code = event.queryStringParameters.code || '';
  const state = event.queryStringParameters.state || '';

  if (!code || !state) {
    return {
      statusCode: 302,
      headers: {
        Location: 'hhttps://collibra.softsoft.dev',
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
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Hello World' }),
    };
  }
};
