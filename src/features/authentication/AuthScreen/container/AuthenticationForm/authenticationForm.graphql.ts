import { gql } from '@apollo/client';

const USER_LOGIN = gql`
    query Login(
        $email: String!
        $password: String!
    ) {
        login(
            email: $email,
            password: $password
        ) {
            _id,
            publicKey,
            token,
            firstName,
            lastName,
            middleName,
            role,
        }
    }
`;

const USER_SIGNUP = gql`
    mutation SignUp(
        $email: String!
        $password: String!
        $firstName: String!
        $lastName: String!
        $middleName: String
    ) {
        signUp(
            email: $email,
            password: $password
            firstName: $firstName,
            lastName: $lastName
            middleName: $middleName,
        ) {
            _id,
            publicKey,
            token,
            firstName,
            lastName,
            middleName,
            role,
            privateKey
        }
    }
`;

export {
  USER_LOGIN,
  USER_SIGNUP,
};
