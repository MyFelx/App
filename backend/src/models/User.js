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
    movies: [{
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Movie",
        },
        TMDB_Id: {
            type: Number,
        }

    }]
})

// Logging the user in 
userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({ email })

    if (!user) {
        throw new Error("Unable to login")
    }

    // const checkPass = await bcrypt.compare(password, user.password)
    const passCheck = user.password === password

    if (!passCheck) {
        throw new Error("Unable to login")
    }

    return user
}

//generating tokens
userSchema.methods.generatingTokens = async function () {
    const token = jwt.sign({ _id: this._id }, 'myFlex', { expiresIn: '10 seconds' });
    this.tokens = this.tokens.concat({ token })
    this.save()
    return token
}

// hash the password before saving into the db in the signup level 
// userSchema.pre("save", async function () {

//     this.password = await bcrypt.hash(this.password, 7)

// })


const User = mongoose.model("User", userSchema)

module.exports = User