const express = require('express');
const app = express();



const userRoutes = require ('./api/routes/users');


//routes
app.use ('/users',usersRoutes);
app.use ('./')








app.use('/users',userRoutes);






module.exports = app;