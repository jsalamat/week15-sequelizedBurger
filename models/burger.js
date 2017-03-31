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
      }
    },


    {
      underscored: true,
      freezeTableName: true, 
      // Model tableName will be the same as the model name instead of being pluralized
    });

  // We return our model after defining
  return Burger;
};