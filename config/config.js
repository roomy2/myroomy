const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  PORT: process.env.PORT || 8000,
  DB_USERNAME: process.env.DB_USERNAME,
  DB_PASSWORD: process.env.DB_PASSWORD,
  MJ_API_KEY_PUBLIC: process.env.MJ_API_KEY_PUBLIC,
  MJ_API_KEY_PRIVATE: process.env.MJ_API_KEY_PRIVATE,
};
