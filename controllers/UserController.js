'use strict';
const moment = require('moment')

const userService = require('../services/UserService');

module.exports.createUser = function (req, res) {
    let data = req.body;
    let responseBody = { data: "", status: 0, error: null }
    //store utc date time format
    data.createdAt = moment().utc();
    
    userService.createUser(
        data, (response) => {
            responseBody.status = 200
            responseBody.data = response
            res.json(responseBody)
        }, error => {
            responseBody.status = 400
            responseBody.error = error
            res.send(responseBody)
        });
}

module.exports.getAllUser = function (req, res) {
    let data = req.body;
    let responseBody = { data: "", status: 0, error: null };
    console.log('ssssssssssss', new moment().format("HH:mm"))
    userService.getAllUser(
        data, (response) => {
            responseBody.status = 200
            responseBody.data = response
            res.json(responseBody)
        }, error => {
            responseBody.status = 400
            responseBody.error = error
            res.send(responseBody)
        });
}




