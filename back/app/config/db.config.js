/**
 * Database configuration object.
 * @typedef {Object} DbConfig
 * @property {string} HOST - The hostname or IP address of the database server.
 * @property {number} PORT - The port number for the database server.
 * @property {string} USER - The username for connecting to the database.
 * @property {string} PASSWORD - The password for connecting to the database.
 * @property {string} DB - The name of the database.
 * @property {string} dialect - The type of database (e.g., "mysql").
 */

/**
 * Database configuration settings.
 * @type {DbConfig}
 */
module.exports = {
  HOST: "dev.toxicsed.fr",
  PORT: 3304,
  USER: "web",
  PASSWORD: "4fN5gL9FNGcKxc3oQrM8n36CfCggQjYtPSF9hRff",
  DB: "web",
  dialect: "mysql",
};
