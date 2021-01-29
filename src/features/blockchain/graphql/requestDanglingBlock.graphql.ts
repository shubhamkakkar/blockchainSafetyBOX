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
            requestAt
            acceptCount
            rejectCount
        }
    }
`;

export default REQUEST_DANDLING_BLOCK;
