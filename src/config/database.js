require('dotenv').config();

module.exports = {
  dialect: 'mysql',
  // Por algum motivo, o host e a port não estão funcionando com as informações do .env
  host: '127.0.0.1',
  port: '3307',
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  define: {
    timestamps: true,
  },
};
