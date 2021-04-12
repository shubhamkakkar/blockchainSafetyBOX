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
            prevHash,
            createdAt,
            messageType,
            hash,
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
    $cipherTextOfBlock: String!
     $userId: ID!
 ) {
     shareBlock (shareBlockArgs: {
         blockId: $blockId
         cipherTextOfBlock: $cipherTextOfBlock
         recipientUserId:  $userId
     }) {
            errorMessage
            isSuccess
         }
     }
`

const SHARED_BLOCKS = gql`
    query SharedBlocks {
        sharedBlocks {
            _id,
            sharedAt,
            recipientUser {
                firstName
                middleName
                lastName
                email
            }
        }
    }
`

const RECEIVED_BLOCKS = gql`
    query ReceivedBlocks {
        receivedBlocks {
            _id
            sharedAt
            sharedBy {
                firstName
                lastName
                email
            }
        }
    }
`
