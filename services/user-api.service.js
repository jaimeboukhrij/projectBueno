const axios = require("axios")

class UsersApiHandler {

    constructor() {
        this.axiosApp = axios.create({
            baseURL: 'http://localhost:5005/api/user'
        })
    }

    getAllUser() {
        return this.axiosApp.get('/')
    }

    getOneUser(userId) {
        return this.axiosApp.get(`/${userId}`)
    }

    createUser(userInfo) {
        return this.axiosApp.post(`/`, userInfo)
    }

    editUser(userId, userInfo) {
        return this.axiosApp.put(`/${userId}`, userInfo)
    }

    deleteUser(userId) {
        return this.axiosApp.delete(`/${userId}`)
    }
}

const userApiHandler = new UsersApiHandler()

module.exports = userApiHandler


