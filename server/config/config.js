const dotenv = require("dotenv");
dotenv.config();

const config = {
  development: {
    username: "root",
    password: "950403",
    database: "project",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  test: {
    username: process.env.DATABASE_USER_TEST,
    password: process.env.DATABASE_PASSWORS_TEST,
    database: process.env.DATABASE_NAME_TEST,
    host: process.env.DATABASE_HOST_TEST,
    dialect: process.env.DATABASE_DIALECT_TEST,
    port: process.env.DATABASE_PORT,
  },
  production: {
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORS,
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST,
    dialect: process.env.DATABASE_DIALECT,
    port: process.env.DATABASE_PORT,
  },
};

module.exports = config;
