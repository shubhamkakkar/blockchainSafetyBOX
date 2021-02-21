import { gql } from '@apollo/client';

const REQUEST_DANDLING_BLOCK = gql`
    enum RequestedBlockMessage {
        PersonalMedicalInformation,
        InsuranceInformation,
        MedicalReports
    }
    mutation RequestDanglingBlock(
        $message: String!
        $cipherKeyForTheMessage: String!
        $messageType: RequestedBlockMessage!
    ) {
        requestDanglingBlock(requestBlockData: {
            message: $message,
            cipherKeyForTheMessage: $cipherKeyForTheMessage,
            messageType: $messageType
        }){
            _id
            requestAt
            acceptCount
            rejectCount
            messageType
        }
    }
    
    query RequestedDanglingBlocks(
        $isUserOnly: Boolean
    ) {
        requestedBlocks(
            isUserOnly: $isUserOnly
        ) {
            _id
            user {
                _id
            }
            requestAt
            acceptCount
            rejectCount
            messageType
        }
    }
`;
