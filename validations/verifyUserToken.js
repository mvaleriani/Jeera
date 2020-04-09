const jwt = require('jsonwebtoken');
const keys = require('../config/keys')
const mongoose = require('mongoose')

const User = mongoose.model('user');

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

module.exports = verifyUserToken;