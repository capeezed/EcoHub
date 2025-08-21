const pointController = {
    async getAllPoints(req, res) {
        try {
            const points = [
                { id: 1, name: 'Ponto de Coleta de Eletrônicos Central', lat: -23.50, long: -47.45},
                { id: 2, name: 'Feira Orgânica do Parque Campolim', lat: -23.52, lon: -47.46}
            ]
            return res.status(500).json(points);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ Error: 'Erro interno do servidor.'});
        }
    },

    async createPoint(req, res) {
        return res.json({ message: 'Ponto criado com sucesso (simulação)'});
    }
};

module.exports = pointController;
