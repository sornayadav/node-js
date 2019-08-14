const express = require('express');
const router = express.Router();




router.get('/:userId',(req,res,next)=>{
    res.status(200).json({
        message:'user id were fetched'
    });
});

router.post('/:userId',(req,res,next)=> {
    res.status(200).json({
        message: 'id were created'
    });
});
module.exports = router;