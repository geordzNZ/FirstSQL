console.log('hi from main.js')
require('dotenv').config()
const { Sequelize } = require('sequelize');
console.log((process.env.SECRET_KEY))

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('GEORDIESHP', 'username','password' {
  host: 'localhost',
  dialect: 'mssql'
});


try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }