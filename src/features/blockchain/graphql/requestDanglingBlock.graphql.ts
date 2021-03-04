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
const REQUESTED_DANGLING_BLOCKS = gql`
    query RequestedDanglingBlocks(
        $isUserOnly: Boolean
    ) {
        requestedBlocks(
            isUserOnly: $isUserOnly
        ) {
            _id
            user {
                _id,
                firstName, 
                lastName,
                middleName,
            }
            requestAt
            acceptCount
            rejectCount
            messageType
        }
    }
`;
const ACCEPT_DECLINE_DANGLING_BLOCK = gql`
    mutation AcceptDeclineDanglingBlock(
        $blockId: ID!
        $isAccept: Boolean
    ) {
        acceptDeclineBlock(acceptDenyParams: {
            blockId: $blockId
            isAccept: $isAccept
        }) {
            acceptCount,
            rejectCount,
        }
    }
`;

const IS_ALREADY_VOTED = gql`
    query IsAlreadyVoted(
        $blockId: ID!
    ) {
        isAlreadyVoted(blockId: $blockId)
    }
`;

const PUBLIC_LEDGER = gql`
    query publicLedger {
        publicLedger {
            _id,
            ownerId,
            shared {
                sharedAt,
                recipientUser {
                    _id,
                    firstName,
                    lastName,
                    middleName
                }
            }
            data,
            createdAt,
            hash
        }
    }
`;
