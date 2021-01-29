import * as Yup from 'yup';

export type InitialInsuranceDetailsState = {
  policyNumber: string;
  cipherKey: string;
  validFrom: Date | string;
  validTo: Date | string;
};

export const initialInsuranceDetailsState: InitialInsuranceDetailsState = {
  policyNumber: '',
  validFrom: '',
  validTo: '',
  cipherKey: '',
};

export const insuranceDetailsSchema = Yup.object().shape({
  policyNumber: Yup.string().required('REQUIRED'),
  cipherKey: Yup.string().required('REQUIRED'),
  validFrom: Yup.date().required('REQUIRED'),
  validTo: Yup.date().required('REQUIRED'),
});
