const mongoose = require("mongoose")
const validator = require('validator');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        trim: true,
        required: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid email")
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }],
   

})

// Logging the user in 
userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({ email })

    if (!user) {
        throw new Error("Unable to login")
    }

    const passCheck = user.password === password

    if (!passCheck) {
        throw new Error("Unable to login")
    }

    return user
}

//generating tokens
userSchema.methods.generatingTokens = async function () {
    const token = jwt.sign({ _id: this._id }, 'myFlex');
    this.tokens = this.tokens.concat({ token })
    this.save()
    return token
}


const User = mongoose.model("User", userSchema)

module.exports = User