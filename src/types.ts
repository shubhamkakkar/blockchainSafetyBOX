import { DocumentPickerResponse } from 'react-native-document-picker';

export interface DocumentPickerHandlerResponse extends Partial<DocumentPickerResponse> {
  error?: any
}
