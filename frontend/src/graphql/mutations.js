import gql from 'graphql-tag';

export const REGISTER_USER = gql`
    mutation RegisterUser($name: String!, $email: String!, $password: String!) {
        registerUser(name: $name, email: $email, password: $password) {
            email,
            token,
            loggedIn
        }
    }
`;