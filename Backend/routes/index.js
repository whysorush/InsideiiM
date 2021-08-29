'use strict'

var express = require('express');

var router = express.Router();


const  userController = require('../controllers/userController');


    /*--------------------------------------- Data Controller--------------------------------------------------*/

    router.post("/user/adduser", userController.addUser)

    router.post("/user/updateuser/:userId", userController.updateUser)

    router.get("/user/getuser", userController.getUser)

    router.delete("/user/deleteuser/:userId", userController.deleteUser)

    router.get("/user/userinfo/:userId", userController.getSingleUser)



    module.exports  = router;