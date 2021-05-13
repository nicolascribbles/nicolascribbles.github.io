const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


// Schema
const Schema = mongoose.Schema;
const UserSchema = 
  new Schema({
    username: String,
    first_name: String,
    last_name: String,
    password: { type: String, required: true }
  })
  .pre('save', function(next) {
    var user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    // generate a salt
    bcrypt.genSalt(10, function(err, salt) {
        if (err) return next(err);

        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);
            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
  })
  .method('toJSON', function(){
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

UserSchema.methods.comparePassword = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
      if (err) return cb(err);
      cb(null, isMatch);
  })
};
// Model
const User = mongoose.model('Users', UserSchema);

module.exports = User;