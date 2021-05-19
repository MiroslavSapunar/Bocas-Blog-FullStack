module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'oDWPTFY7V9OXoluE0Q08dfH3TAwRuPaSyN0sZC0Iw1AFLSu6WUt3UhuJfSiN1pW/1lBO2pQWyBzpD8d50B++lQ=='),
    },
  },
});