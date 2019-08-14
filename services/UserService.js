const userDAO = require('../daos/userDao')

module.exports.createUser = function (data, callback, errorCallback) {

    userDAO.createUser(data, (userResponse) => {
        callback(userResponse)
    },(userError) => {
        errorCallback(userError)
    })
    
}

module.exports.getAllUser = function (data, callback, errorCallback) {

    userDAO.getAllUser(data, (userResponse) => {
        callback(userResponse)
    },(userError) => {
        errorCallback(userError)
    })
    
}