const PontoSustentavel = require('../models/point')

const pointController = {
    async createPoint(req, res) {
        try{
            const { Nome, Descricao, Latitude, Longitude, Endereco, UsuarioID, CategoriaID } = req.body

            const newPoint = await PontoSustentavel.create({
                Nome,
                Descricao,
                Latitude,
                Longitude,
                Endereco,
                UsuarioID,
                CategoriaID
            })

            return res.status(201).json(newPoint);
        } catch (error) {
            console.error(error)
            return res.status(500).json({ error: 'Erro ao criar o ponto sustentável.'})
        }
    },

    async getAllPoints(req, res) {
        try {
            const points = await PontoSustentavel.findAll();
            return res.status(200).json(points); 
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Erro ao buscar o ponto.'})
        }
    },

    async getPointById(req, res) {
        try {
            const { id } = req.params
            const point = await PontoSustentavel.findByPk(id)

            if (!point) {
                return res.status(404).json({ error: 'Ponto não encontrado.' })
            }

            return res.status(200).json(point)
        } catch (error) {
            console.error(error)
            return res.status(500).json({ error: 'Erro ao buscar o ponto'})
        }
    },

    async updatePoint(req, res) {
        try {
            const { id } = req.params
            const { Nome, Descricao, Endereco } = req.body

            const point = await PontoSustentavel.findByPk(id)
            if (!point) {
                return res.status(404).json({ error: 'Ponto não encontrado.'})
            }

            point.Nome = Nome
            point.Descricao = Descricao
            point.Endereco = Endereco
            await point.save()
            return res.status(200).json(point)
        } catch(error) {
            console.error(error)
            return res.status(500).json({ error: 'Erro ao atualizar o ponto.'})
        }
    },

    async deletePoint(req, res) {
        try{
            const { id } = req.params
            const point = await PontoSustentavel.findByPk(id)

            if (!point) {
                return res.status(404).json({ error: 'Ponto não encontrado.'})
            }

            await point.destroy()
            return res.status(204).send()
        } catch (error) {
            console.error(error)
            return res.status(500).jjson({ error: 'Erro ao deletar o ponto'})
        }
    }
}

module.exports = pointController