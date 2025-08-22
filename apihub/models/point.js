const {DataTypes} = require('sequelize')
const sequelize = require('../config/database')

const PontoSustentavel = sequelize.define('PontoSustentavel',{

    pontoID: {
        type: DataTypes.INTEGER,
        autoIncrement: true, 
        primaryKey: true,
        field: 'PontoID'
    },
    nome: {
        type: DataTypes.STRING(150),
        allowNull: false, 
        field: 'Nome' 
    },
    descricao: {
        type: DataTypes.TEXT, 
        field: 'Descricao' 
    },
    latitude: {
        type: DataTypes.DECIMAL(9,6),
        allowNull: false,
        field: 'Latitude'
    }, 
    longitude: {
        type: DataTypes.DECIMAL(9,6),
        allowNull: false,
        field: 'Longitude'
    },
    endereco: {
        type: DataTypes.STRING(255),
        field: 'Endereco'
    },
    usuarioID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'UsuarioID'
    },
    categoriaID: {
        type: DataTypes.INTEGER,
        allowNull: false, 
        field: 'CategoriaID'
    }
}, {
    tableName: 'PontosSustentaveis',
    timestamps: false
})

module.exports = PontoSustentavel