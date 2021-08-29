'use strict'

var User = require('../model/userModel').User;

module.exports = {
  async addUser(req, res){
      var user = new User();
      user.firstName = req.body.firstName;
      user.lastName = req.body.lastName;
      user.dob =req.body.dob;
      user.save(function(err, result)
      {
        if(err)
          {
            console.log(err);
            res.statusCode = 500;
            return res.send(
              {
                status: 'FAILURE',
                message: 'Internal server error.',  
              }
            );
          }
          else
          {
            res.statusCode =201;
            return res.send(
            {
              status: 'SUCCESS',
              message: 'user added successfully.',
              data: result
              }
            );
          }
        }
      );
  },

  async updateUser(req,res){
    User.findByIdAndUpdate(req.params.userId, {
      $set: req.body
    }, (error, data) => {
      if (error) {
        return next(error);
        console.log(error)
      } else {
        res.send(data)
        console.log('Data updated successfully')
      }
    })
  },

  async getSingleUser(req,res,next){
    User.findById(req.params.userId,(error,userInfo)=>{
      if (error) {
        return next(error);
      } else {
        res.send(userInfo)
        console.log('userInfo retrived successfully')
      }
    })
  },

  async getUser(req,res){
    User.find((error, data) => {
      if (error) {
        return next(error)
      } else {
        res.send(JSON.stringify(data))      
      }
    })
  },

  async deleteUser(req,res){
    User.findByIdAndRemove(req.params.userId, (error, data) => {
      
      if (error) {
        return next(error);
      } else {
        res.status(200).json({
          res: data
        })
      }
    })
  }
}
