'use strict';

// Production specific configuration
// =================================
module.exports = {
  // Server IP
  ip:     process.env.OPENSHIFT_NODEJS_IP ||
          process.env.IP ||
          undefined,

  // Server port
  port:   process.env.OPENSHIFT_NODEJS_PORT ||
          process.env.PORT ||
          8080,

  sequelize: {
    uri: process.env.POSTGRES_URL || 'postgres://postgres:postgres@localhost:5432/twinpeaks-frontend',
    options: {
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      define: {
        timestamps: false
      }
    }
  }
};
