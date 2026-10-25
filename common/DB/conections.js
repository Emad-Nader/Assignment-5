const { Sequelize } = require('sequelize');
  
const sequelize = new Sequelize("assignment5_social_media_db", "root", "", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
});

sequelize.sync()
  .then(() => {
    console.log("Database synced successfully");
  })
  .catch((error) => {
    console.log(error);
  });
  


module.exports = { sequelize };

