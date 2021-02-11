import * as Yup from 'yup';
import { ImagePickerResponseWithId } from 'types';

export type InitialInsuranceDetailsState = {
  policyNumber: string;
  cipherKey: string;
  validFrom: Date | string;
  validTo: Date | string;
  images: ImagePickerResponseWithId[]
};

export const initialInsuranceDetailsState: InitialInsuranceDetailsState = {
  policyNumber: '',
  validFrom: '',
  validTo: '',
  cipherKey: '',
  images: [],
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
    images: Yup.array()
      .required('REQUIRED'),
  });
