
const Produto = require('../models/products'); 

const productController = {
    async createProduct(req, res) {
 
        const { titulo, descricao, status, donoUsuarioID, categoriaID } = req.body;
        try {
            const newProduct = await Produto.create({
                titulo,
                descricao,
                status,
                donoUsuarioID,
                categoriaID
            });
            return res.status(201).json(newProduct);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Erro ao criar o produto.' });
        }
    },

    async getAllProducts(req, res) {
        try {
           
            const products = await Produto.findAll();
            return res.status(200).json(products);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Erro ao buscar os produtos.' });
        }
    },

    
    async getProductById(req, res) {
        try {
            const { id } = req.params;
            const product = await Produto.findByPk(id);

            if (!product) {
                return res.status(404).json({ error: 'Produto não encontrado.' });
            }
            return res.status(200).json(product);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Erro ao buscar o produto.' });
        }
    },

    
    async updateProduct(req, res) {
        try {
            const { id } = req.params;
            const { titulo, descricao, status } = req.body;

            const product = await Produto.findByPk(id);
            if (!product) {
                return res.status(404).json({ error: 'Produto não encontrado.' });
            }

            product.titulo = titulo || product.titulo;
            product.descricao = descricao || product.descricao;
            product.status = status || product.status;

            await product.save();
            return res.status(200).json(product);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Erro ao atualizar o produto.' });
        }
    },

    
    async deleteProduct(req, res) {
        try {
            const { id } = req.params;
            
            const product = await Produto.findByPk(id);

            if (!product) {
                return res.status(404).json({ error: 'Produto não encontrado.' });
            }

            await product.destroy();
            return res.status(204).send();
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Erro ao deletar o produto.' });
        }
    }
};

module.exports = productController;