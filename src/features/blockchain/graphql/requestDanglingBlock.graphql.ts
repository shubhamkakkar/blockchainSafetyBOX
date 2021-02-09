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
`;

export default REQUEST_DANDLING_BLOCK;
