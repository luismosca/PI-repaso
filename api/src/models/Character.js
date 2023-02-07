const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
//Prueba :P
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("character", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
