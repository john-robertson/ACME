'use strict';

// Use local.env.js for environment variables that grunt will set when the server starts locally.
// Use for your api keys, secrets, etc. This file should not be tracked by git.
//
// You will need to set these on the server you deploy to.

module.exports = {
  DOMAIN: 'http://localhost:9000',
  SESSION_SECRET: 'twinpeaksfrontend-secret',
  DEBUG: '',
  BLUEBIRD_WARNINGS: 0,
  POSTGRES_URL: 'postgres://postgres:postgres@localhost:5432/twinpeaks-frontend'
};
