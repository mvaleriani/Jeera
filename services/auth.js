const mongoose = require('mongoose')
const { validateRegInput, validateLoginInput } = require('../validations/validateInput')

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys')

const User = mongoose.model('user')

const registerUser = async data => {
    try {
        const { messages, isValid } = validateRegInput(data)
        if (!isValid) throw new Error(messages)

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

        return { token, loggedIn: true, ...newUser._doc, passwordHash: null }
    } catch (err) {
        throw err;
    }
}

const loginUser = async (data) => {
    try {
        const { messages, isValid } = validateLoginInput(data)
        
        if (!isValid) throw new Error(messages)
        
        const { email, password } = data
        const existingUser = await User.findOne({ email })

        if (!existingUser) throw new Error("User does not exist")

        const isValidPassword = await bcrypt.compare(password, existingUser.passwordHash)

        if (!isValidPassword) throw new Error('Password invalid')

        const token = jwt.sign({ id: existingUser._id }, keys.tokenGenKey)
        
        return { token, loggedIn: true, ...existingUser._doc, passwordHash: null }
    } catch (err) {
        throw err;
    }
}

const logoutUser = async (data) => {
    try {
        const { _id } = data;

        const existingUser = await User.findById(_id)

        if (!existingUser) throw new Error('User does not exist')

        return { token: "", loggedIn: false, ...existingUser._doc, passwordHash: null }
    } catch (err) {
        throw err
    }
}

const verifyUserToken = async (data) => {
    try {
        const { token } = data;
        const decoded = jwt.verify(token, keys.tokenGenKey);
        const { id } = decoded;

        const loggedIn = await User.findById(id).then((user) => {
            return user ? true : false;
        })

        return { loggedIn }
    } catch (err) {
        return { loggedIn: false }
    }
};

const AuthService = {
    registerUser,
    loginUser,
    logoutUser,
    verifyUserToken
}

module.exports = AuthService;