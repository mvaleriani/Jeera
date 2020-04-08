const Validator = require('validator');
const { isEmail, isEmpty } = Validator;

const isValidText = (str) => {
    return typeof str === "string" && str.trim() > 0;
}

const validateInputs = ({ email, name, password }) => {
    email = isValidText(email) ? email : "";
    name = isValidText(name) ? name : "";
    password = isValidText(password) ? password : "";

    if (!isEmail(email)) {
        return { message: "Email is invalid", isValid: false }
    }

    if (isEmpty(email)) {
        return { message: "Email field is required", isValid: false }
    }

    if (isEmpty(name)) {
        return { message: "Name field is required", isValid: false }
    }

    if (isEmpty(password)) {
        return { message: "Password field is required", isValid: false }
    }

    return ({
        message: "",
        isValid: true
    });
};

module.exports = validateInputs;