const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const forgotpasswordSchema = new Schema({
  
  active: {type:Boolean, required:true},

  userId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    }

});


module.exports = mongoose.model('Forgotpassword', forgotpasswordSchema);


