import * as Yup from 'yup';
import { ImagePickerResponse } from 'react-native-image-picker';

export type InitialInsuranceDetailsState = {
  policyNumber: string;
  cipherKey: string;
  validFrom: Date | string;
  validTo: Date | string;
  urls: ImagePickerResponse[]
};

export const initialInsuranceDetailsState: InitialInsuranceDetailsState = {
  policyNumber: '',
  validFrom: '',
  validTo: '',
  cipherKey: '',
  urls: [],
};

export const insuranceDetailsSchema = Yup.object()
  .shape({
    policyNumber: Yup.string()
      .required('REQUIRED'),
    cipherKey: Yup.string()
      .required('REQUIRED'),
    validFrom: Yup.date()
      .required('REQUIRED'),
    validTo: Yup.date()
      .required('REQUIRED'),
    urls: Yup.array()
      .required('REQUIRED'),
  });
