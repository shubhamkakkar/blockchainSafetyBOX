import React from 'react';
import { View } from 'react-native';
import { Formik, FormikHelpers } from 'formik';
import {
  MedicalHistoryFormInitialState, medicalHistoryFormInitialState, medicalHistoryFormSchema,
} from './medicalHistoryForm.formik';
import styles
  from './medicalHistoryForm.styles';

type Props = {

};
export default function MedicalHistoryForm(props: Props) {
  async function formSubmitHandler(
    value: MedicalHistoryFormInitialState,
    helpers: FormikHelpers<MedicalHistoryFormInitialState>,
  ) {

  }
  return (
    <View style={styles.container}>
      <Formik
        initialValues={medicalHistoryFormInitialState}
        onSubmit={formSubmitHandler}
        validationSchema={medicalHistoryFormSchema}
      />
    </View>
  );
}
