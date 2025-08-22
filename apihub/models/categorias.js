const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')

const Categorias = sequelize.define('Categorias', {
    CategoriaID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        field: 'CategoriaID'
    },
    Nome: {
        type: DataTypes.STRING(100),
        allowNull: false,
        field: 'Nome'
    },
    Descricao: {
        type: DataTypes.STRING(255),
        allowNull: true,
        field: 'Descricao'
    }
})