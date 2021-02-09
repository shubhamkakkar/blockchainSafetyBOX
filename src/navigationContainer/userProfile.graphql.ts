import {gql} from '@apollo/client';

const USER_PROFILE = gql`
  query UserProfile {
    user {
      _id
      firstName
      lastName
      middleName
      email
      role
      publicKey
    }
  }
`;

export {USER_PROFILE};
