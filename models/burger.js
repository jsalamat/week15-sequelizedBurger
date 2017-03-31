// Sequelize wants us to wrap our "define" method in a function so we can pass in sequelize and DatatTypes
module.exports = function(sequelize, DataTypes) {
  // sequelize.define is used to create a model
  var Burger = sequelize.define("Burger",
   {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },

    {
      underscored: true,
      freezeTableName: true, 
      // Model tableName will be the same as the model name instead of being pluralized
    });

  // We return our model after defining
  return Burger;
};

// CREATE DATABASE burgers_db;

// USE burgers_db;


// CREATE TABLE burgers
// (
//   id int NOT NULL AUTO_INCREMENT,
//   burger_name varchar(255) NOT NULL,
//   devoured boolean DEFAULT false,
//   date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//   PRIMARY KEY (id)
// );


// -------From former mvc file Import the ORM to create functions that will interact with the database-----
// var orm = require("../config/orm.js");

// var burger = {
  
//   all: function(cb) {
//     orm.all("burgers", function(res) {
//       cb(res);
//     });
//   },



//   update: function(id, cb) {
//     orm.update("burgers", id, cb);
//   },

//   create: function(name, cb) {
//     orm.create("burgers", name, cb);
//   }

// };

// module.exports = burger;

//----End of former  MVC file