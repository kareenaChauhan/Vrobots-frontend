const fetch = require('node-fetch');

exports.handler = async function (event, context) {
  const url = `http://13.200.195.70:8000/graphql/${event.path.replace('/api', '')}`; // Replace with your backend IP and port
  const response = await fetch(url, {
    method: event.httpMethod,
    headers: event.headers,
    body: event.body ? JSON.parse(event.body) : undefined,
  });
  const data = await response.json();

  return {
    statusCode: response.status,
    body: JSON.stringify(data),
  };
};