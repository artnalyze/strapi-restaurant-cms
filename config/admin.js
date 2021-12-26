module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'dfc804486ebebb4a77ef451c4213ba98'),
  },
});
