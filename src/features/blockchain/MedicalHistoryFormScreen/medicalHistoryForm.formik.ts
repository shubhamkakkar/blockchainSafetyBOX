import * as Yup from 'yup';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export type MedicalHistoryFormInitialState = {
  firstName: string;
  lastName: string;
  middleName?: string;
  phoneNumber: string;
  dateOfBirth: Date | string;
  gender: 'Male' | 'Female';
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  pinCode: string;
  country: string;
  weight?: string;
  height?:string;
  significantMedicalHistoryNote?: string;
  listMedicalProblemNote?: string;
  listMedicineTakenRegularlyNote?: string;
  cipherKey: string
};
export const medicalHistoryFormInitialState: MedicalHistoryFormInitialState = {
  firstName: '',
  lastName: '',
  middleName: '',
  phoneNumber: '',
  dateOfBirth: '',
  gender: 'Male',
  addressLine1: '',
  addressLine2: '',
  city: '',
  state: '',
  pinCode: '',
  country: '',
  weight: '',
  height: '',
  significantMedicalHistoryNote: '',
  listMedicalProblemNote: '',
  listMedicineTakenRegularlyNote: '',
  cipherKey: '',
};
export const medicalHistoryFormSchema = Yup.object().shape({
  firstName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('REQUIRED'),
  middleName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!'),
  lastName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('REQUIRED'),
  dateOfBirth: Yup.date().required('REQUIRED'),
  gender: Yup.mixed().oneOf(['Male', 'Female']).required('REQUIRED'),
  phoneNumber: Yup.string()
    .required('REQUIRED')
    .matches(phoneRegExp, 'Phone number is not valid')
    .min(10, 'to short')
    .max(10, 'to long'),
  addressLine1: Yup.string().required('REQUIRED'),
  addressLine2: Yup.string(),
  city: Yup.string().required('REQUIRED'),
  state: Yup.string().required('REQUIRED'),
  pinCode: Yup.string()
    .required('REQUIRED')
    .matches(/^[0-9]+$/, 'Must be only digits')
    .min(6, 'Must be exactly 6 digits')
    .max(6, 'Must be exactly 6 digits'),
  country: Yup.string().required('REQUIRED'),
  weight: Yup.string().required('REQUIRED'),
  height: Yup.string().required('REQUIRED'),
  significantMedicalHistoryNote: Yup.string(),
  listMedicalProblemNote: Yup.string(),
  listMedicineTakenRegularlyNote: Yup.string(),
  cipherKey: Yup.string()
    .required('REQUIRED'),
});

/*
* TODO
*  choices available ->
*  basic/general medical information
*  insurance information and images
*  upload any medical data image / pdf
*  add "emergency contacts"
* */
