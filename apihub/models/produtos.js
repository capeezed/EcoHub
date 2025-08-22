const {DataTypes} = require('sequelize')
const sequelize = require('../config/database')

const Produtos = sequelize.define('Produtos', {
    ProdutoID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        field: 'ProdutoID'
    },
    Titulo:{
        type: DataTypes.STRING(150),
        allowNull: false,
        field: 'Titulo'
    },
    Descricao: {
        type: DataTypes.STRING(500),
        allowNull: true,
        field: 'Descricao'
    },
    Status: {
        type: DataTypes.STRING(20),
        allowNull: false,
        field: 'Status'
    },
    DonoUsuarioID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'DonoUsuarioID'
    },
    CategoriaID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'CategoriaID'
    },
    DataCriacao: {
        type: DataTypes.DATE,
        allowNull: true,
        field: 'DataCriacao'
    }
})

module.exports = Produtos