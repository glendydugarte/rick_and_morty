const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('Favorite', {

id: { 
   type: DataTypes.INTEGER, 
   allowNull: false,
   primaryKey: true,
   autoIncrement: true

},
name: {
   type: DataTypes.STRING,
   allowNull: false,
   UNIQUE: true,

},
status: {
   type: DataTypes.ENUM('Alive', 'Dead', 'unknow'),
   allowNull: false,
   
},
species: {
   type: DataTypes.STRING,
   allowNull: false,

},

gender: {
   type: DataTypes.ENUM('Female', 'Male', 'Genderless', 'unknow'),
   allowNull: false,

},
origin: {
   type: DataTypes.STRING,
   allowNull: false,

},
Image:{
   type: DataTypes.STRING,
   allowNull: false,
   UNIQUE: true

}
   }, { timestamps: false });
};
