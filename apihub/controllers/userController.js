const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Usuario  = require('../models/Users')

const saltRounds = 10;

const userController = {
    async register(req, res) {
        try {
            const { Nome, Email, Senha} = req.body
            
            if(!Nome || !Email || !Senha) {
                return res.status(400).json({ error: 'Nome, Email e Senha são obrigatórios.'})
            }

            const senhaHash = await bcrypt.hash(Senha, saltRounds);

            const newUser = await Usuario.create({
                Nome,
                Senha,
                Email
            })
            
            const userResponse = {
                usuarioID: newUser.UsuarioID,
                Nome: newUser.Nome,
                Email: newUser.Email
            }
            return res.status(201).json(userResponse)
        } catch(error) {
            console.error(error)
            return res.status(500).json({ error: 'Erro ao registrar o usuário'})
        }
    },

    async login(req, res) {
        try {
            const { Email, Senha} = req.body

            if(!Email || !Senha) {
                return res.status(400).json({ error: 'Email e Senha são obrigatórios.'})
            }

            const user = await Usuario.findOne({ where: { Email}})
            if(!user) {
                return res.status(401).json({ error: 'Usuário não encontrado.' })
            }

            const isPasswordValid = await bcrypt.compare(Senha, user.Senha)
            if(!isPasswordValid) {
                return res.status(401).json({ error: 'Senha incorreta.'})
            }

            const token = jwt.sign(
                { id: user.UsuarioID, email: user.Email},
                process.env.JWT_SECRET,
                { expiresIn: '8h'}
            )

            return res.status(200).json({ token})
        } catch(error) {
            console.error(error)
            return res.status(500).json({ error: 'Erro ao fazer login.'})
        }
    },

    async getAllUsers(req, res) {
        try {
            const users = await Usuario.findAll({
                attributes: { exclude: ['Senha']}
            })
            res.status(200).json(users)
        } catch (error) {
            console.error(error)
            res.status(500).json({ error: 'Erro ao buscar os usuários.'})
        }
    }
}

module.exports = userController;