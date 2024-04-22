const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const userSchema = new Schema({
    username:{
        type: String,
        required:true,
        lowercase: true,
        unique:true
    },
    password:{
        type: String,
        required:true
    },
               
    memberSince:{
        type: Date,
        default: Date.now
    },
    recipe:{
        type: Schema.Types.ObjectId,
        ref:"Recipe"
    },
    ingredients:{
        type: Schema.Types.ObjectId,
        ref:"Ingredients"
    }
})

userSchema.pre('save', function(next){
    const user = this
    if(!user.isModified('password'))
    return next()
    bcrypt.hash(user.password, 10, (err, hash) =>{
        if(err) return next(err)
        user.password = hash
        next()
    })
})

userSchema.methods.checkPassword = function(passwordAttempt, callback) {
    bcrypt.compare(passwordAttempt, this.password, (err, isMatch) => {
        if (err) {
            if (callback) {
                return callback(err);
            }
            return Promise.reject(err); // Promisify error handling if no callback is provided
        }
        if (callback) {
            return callback(null, isMatch);
        }
        return Promise.resolve(isMatch); // Promisify result if no callback is provided
    });
};

userSchema.methods.withoutPassword = function(){
    const user = this.toObject()
    delete user.password
    return user
}

module.exports = mongoose.model("User", userSchema)