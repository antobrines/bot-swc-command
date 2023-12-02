const express = require('express');
const authRoute = require('./user.route');
const categoryRoute = require('./category.route');
const objectRoute = require('./object.route');
const router = express.Router();

const defaultRoutes = [
  {
    path: '/users',
    route: authRoute,
  },
  {
    path: '/categories',
    route: categoryRoute,
  },
  {
    path: '/objects',
    route: objectRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
