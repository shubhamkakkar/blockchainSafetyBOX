import { gql } from '@apollo/client';

const REQUEST_DANDLING_BLOCK = gql`
    enum RequestedBlockMessage {
        PersonalMedicalInformation,
        InsuranceInformation,
        MedicalReports
    }
    mutation RequestDanglingBlock (
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
    query RequestedDanglingBlocks (
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
    mutation AcceptDeclineDanglingBlock (
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
    query IsAlreadyVoted (
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
            createdAt,
            hash
            ownerProfile {
                firstName
                lastName
                middleName
                email
            }
            messageType
        }
    }
`;

const MY_BLOCK = gql`
    query MyBlock (
        $blockId: ID!
        $cipherKey: String!
    ) {
        myBlock (myBlockArgs : {
            blockId: $blockId,
            cipherTextOfBlock: $cipherKey
        }) {
            data,
            prevHash
        }
    }
`;

const SEARCH_USER = gql`
    query SearchUser (
        $filter: String!
    ) {
        searchUser (
            filter: $filter
       ) {
            _id,
            firstName,
            lastName,
            middleName,
            publicKey,
            email,
     }
    }
`
const SHARE_BLOCK = gql`
 mutation ShareBlock (
    $blockId: ID!
    $userId: ID!
    $publicKey: String!
    $privateKey: String!
    $cipherTextOfBlock: String!
 ) {
     shareBlock (shareBlockArgs: {
         blockId: $blockId
         cipherTextOfBlock: $cipherTextOfBlock
         privateKey: $privateKey
         recipientUser: {
             userId: $userId
             publicKey: $publicKey
         }}) {
            errorMessage
            isSuccess
         }
     }
`
