const ApiError = require('../errors/ApiError')

class UserController {
    async register(req, res) {

    }

    async login(req, res) {

    }

    async auth(req, res, next) {
        const {id} = req.query
        if (!id) {
            return next(ApiError.badRequest('Не задан id'))
        }
        res.json(id)
    }
}

module.exports = new UserController()