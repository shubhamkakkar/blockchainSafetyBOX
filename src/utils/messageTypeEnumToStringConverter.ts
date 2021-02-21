import { RequestedBlockMessage } from 'generated/graphql';

export default function messageTypeEnumToStringConverter(messageType: RequestedBlockMessage) {
  switch (messageType) {
    case RequestedBlockMessage.PersonalMedicalInformation: {
      return 'Personal Medical Information';
    }
    case RequestedBlockMessage.InsuranceInformation: {
      return 'Insurance Information';
    }
    default: {
      return 'Medical Reports';
    }
  }
}
