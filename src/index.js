const buildOutput = (rnd) => ({
  body: '{"hello": "world"}',
  headers: {
    'Content-Type': ['application/json'],
    'X-Request-Id': [`rnd-${rnd}`]
  },
  statusCode: 200,
  statusText: 'OK'
});

exports.listener = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const result = buildOutput(Math.random());
      resolve(result);
    }, 1000);
  });
};
