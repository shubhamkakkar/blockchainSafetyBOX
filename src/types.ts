import { ImagePickerResponse } from 'react-native-image-picker';

export interface ImagePickerResponseWithId extends ImagePickerResponse {
  id: string
}
