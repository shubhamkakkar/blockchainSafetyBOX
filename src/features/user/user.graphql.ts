import { gql } from "@apollo/client";

const ALL_USERS = gql`
    query AllUsers(
        $isAdmin: Boolean!
    ) {
        allUsers (isAdmin: $isAdmin){
            lastName
            firstName
            middleName
            email
            _id
        }    
    }`

const MAKE_USER_ADMIN = gql`
    mutation MakeUserAdmin(
        $id: ID!
    ){
        makeUserAdmin(id: $id)
    }`
