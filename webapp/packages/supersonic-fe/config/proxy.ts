export default {
  dev: {
    '/api/': {
      target: 'http://127.0.0.1:9099',
      changeOrigin: true,
    },
  },
};
