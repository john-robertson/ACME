'use strict';

// Development specific configuration
// ==================================
module.exports = {

  // Sequelize connection opions
  sequelize: {
    uri: process.env.POSTGRES_URL,
    options: {
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      define: {
        timestamps: false
      }
    }
  },

  seedDB: false
};
