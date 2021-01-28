import { gql } from '@apollo/client';

const REQUEST_DANDLING_BLOCK = gql`
    mutation RequestDanglingBlock(
        $message: String!
        $cipherKeyForTheMessage: String!
    ) {
        requestDanglingBlock(requestBlockData: {
            message: $message,
            cipherKeyForTheMessage: $cipherKeyForTheMessage
        }){
            _id
        }
    }
`;
