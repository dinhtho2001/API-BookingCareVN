const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('booking-care','root','123456aA', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});

let connectDB = async ()=>{
    try {
        await sequelize.authenticate();
    console.log('Connection has been established sussessfully');
    } catch (error) {
        console.log('Unable to connect to the database', error);
    }
}

module.exports = connectDB;