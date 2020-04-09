const Validator = require('validator');
const { isEmail, isEmpty } = Validator;

const isValidText = (str) => {
    return typeof str === "string" && str.trim() > 0;
}

const validateInputs = ({ email, name, password }) => {
    email = isValidText(email) ? email : "";
    name = isValidText(name) ? name : "";
    password = isValidText(password) ? password : "";

    let messages = [];
    let isValid;

    if (!isEmail(email)) {
        messages.push("Email is invalid");
    }
    if (isEmpty(email)) {
        messages.push("Email field is required");
    }
    if (isEmpty(name)) {
        messages.push("Name field is required");
    }
    if (isEmpty(password)) {
        messages.push("Password field is required");
    }

    isValid = messages.length > 0 

    return ({
        messages,
        isValid
    });
};

module.exports = validateInputs;