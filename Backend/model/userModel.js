var mangoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  active: {
    type: Boolean, 
    default: true
    },
    userId: {
     type: String
    },
    firstName: {
      type: String
    },
    lastName: {
        type: String
      },
    dob:{
      type:Date
    }
  });

var User = mongoose.model('User', userSchema);

module.exports = {
  User: User
}