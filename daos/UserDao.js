const model = require('../model');

module.exports.createUser = function (userData, callback, errorCallback) {
    let data = userData
    model.User.create(data).then(response => {
        callback(response)
    }).catch(error => {
        errorCallback(error)
    })
}

module.exports.getAllUser = function (userData, callback, errorCallback) {
    let data = userData
    model.user.findAll().then(response => {
        callback(response)
    }).catch(error => {
        errorCallback(error)
    })
}
