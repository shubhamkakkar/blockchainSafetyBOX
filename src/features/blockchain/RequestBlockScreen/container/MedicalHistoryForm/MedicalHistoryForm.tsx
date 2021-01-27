import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Formik, FormikHelpers } from 'formik';
import AnimatedButton from 'UI/Buttons/AnimatedButton';
import { useSelector } from 'react-redux';
import { selectUserProfile } from 'store/selectors/user.selectors';
import MedicalHistoryFormFields from './container/MedicalHistoryFormFields';
import {
  MedicalHistoryFormInitialState, medicalHistoryFormInitialState, medicalHistoryFormSchema,
} from './medicalHistoryForm.formik';
import styles
  from './medicalHistoryForm.styles';
import PreviewMedicalHistoryModal from './container/PreviewMedicalHistoryModal';

export default function MedicalHistoryForm() {
  const userProfile = useSelector(selectUserProfile);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [
    previewFormState, setPreviewFormState,
  ] = useState<MedicalHistoryFormInitialState | undefined>();

  const [
    preFilledMedicalForm, setPreFilledMedicalHistoryForm,
  ] = useState<MedicalHistoryFormInitialState>(medicalHistoryFormInitialState);

  function toggleModalOpen() {
    setIsModalOpen(!isModalOpen);
  }

  async function formSubmitHandler(
    value: MedicalHistoryFormInitialState,
    helpers: FormikHelpers<MedicalHistoryFormInitialState>,
  ) {
    helpers.setSubmitting(false);
    setPreviewFormState(value);
    toggleModalOpen();
  }

  function onPreviewSaveConfirmation() {
    toggleModalOpen();
  }

  useEffect(() => {
    if (userProfile && userProfile.get('firstname')) {
      setPreFilledMedicalHistoryForm({
        ...preFilledMedicalForm,
        firstName: userProfile.get('firstName'),
        lastName: userProfile.get('lastName'),
        middleName: userProfile.get('middleName'),
      });
    }
  }, []);

  if (isModalOpen && previewFormState) {
    return (
      <PreviewMedicalHistoryModal
        {...{
          isModalOpen, toggleModalOpen, previewFormState, onPreviewSaveConfirmation,
        }}
      />
    );
  }

  return (
    <View style={styles.container}>
      {/* todo: add a loader whose state will come from graphql */}
      <Formik
        initialValues={medicalHistoryFormInitialState}
        onSubmit={formSubmitHandler}
        validationSchema={medicalHistoryFormSchema}
        enableReinitialize
      >
        {({
          handleSubmit,
          isSubmitting,
          isValid,
        }) => (
          <View style={styles.container}>
            <MedicalHistoryFormFields />
            <View style={styles.submitButtonContainer}>
              <AnimatedButton
                disabled={isSubmitting || !isValid} // todo:  graphql loader
                isLoading={isSubmitting}
                title="Preview"
                onPress={handleSubmit as any}
              />
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
}
