const mongoose = require('mongoose')
const validateInputs = require('../validations/valid_text')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys')

const User = mongoose.model('user')

const registerUser = async data => {
    try {
        const { messages, isValid } = validateInputs(data)
        if (!isValid) {
            throw new Error(messages.join(' / '))
        }

        const { name, email, password } = data;
        
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            throw new Error("Email belongs to an existing user")
        }
        
        const passwordHash = await bcrypt.hash(password, 10);

        const newUser = new User(
            {
                name,
                email,
                passwordHash
            },
            err => {
                if (err) throw err;
            }
        );
        newUser.save();

        const token = jwt.sign({ id: newUser._id }, keys.tokenGenKey)

        return { token, loggedIn: true, ...newUser._doc, passwordHash: null}
    } catch (err) {
        throw err;
    }
}

const loginUser = async (data) => {
    try {
        const { email, password } = data
        const existingUser = await User.findOne({ email })

        if (!existingUser) {
            throw new Error("Email does not belong to an existing user")
        }

        const isValidPassword = await bcrypt.compare(password, existingUser.passwordHash)

    } catch (err) {

    }
}

const AuthService = {
    registerUser,
    // loginUser
}

module.exports = AuthService;