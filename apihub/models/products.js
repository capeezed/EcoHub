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
        type: DataTypes.TEXT,
        field: 'Descricao'
    },
    Status: {
        type: DataTypes.STRING(20),
        allowNull: false,
        defaultValue: 'Disponível',
        field: 'Status',
        validade: {
            isIn: [['Disponível', 'Reservado', 'Concluído']]
        }

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
    }
},
{
    tableName: 'Produtos',
    timestamps: false,
    createdAt: 'DataCriacao',
    updateAt: false
}
)
module.exports = Produtos