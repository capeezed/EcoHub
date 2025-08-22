const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')

const Usuario = sequelize.define('Usuarios', {

    UsuarioID: { 
        type: DataTypes.INTEGER, 
        autoIncrement: true, 
        primaryKey: true,
        field: 'UsuarioID'
    },
    Nome: {
        type: DataTypes.STRING(150),
        allowNull: false,
        field: 'Nome'
    },
    Email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique : true,
        field: 'Email'
    },
    Senha: {
        type: DataTypes.STRING(255),
        allowNull: false,
        field: 'Senha'
    },
    DataCriacao: {
        type: DataTypes.DATE,
        allowNull: true,
        field: 'DataCriacao'
    }

})


module.exports = Usuario