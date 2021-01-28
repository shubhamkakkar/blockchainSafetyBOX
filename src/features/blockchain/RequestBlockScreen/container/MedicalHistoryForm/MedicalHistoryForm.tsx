import React, { useEffect, useState } from 'react';
import { Alert, View } from 'react-native';
import { Formik, FormikHelpers } from 'formik';
import AnimatedButton from 'UI/Buttons/AnimatedButton';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserProfile } from 'store/selectors/user.selectors';
import { TRequestedDanglingBlock, useRequestDanglingBlockMutation } from 'generated/graphql';
import Loader from 'UI/Loader';
import { addDanglingBlock, addMyDanglingBlock } from 'store/actions/danglingBlocks.actions';
import MedicalHistoryFormFields from './container/MedicalHistoryFormFields';
import {
  MedicalHistoryFormInitialState, medicalHistoryFormInitialState, medicalHistoryFormSchema,
} from './medicalHistoryForm.formik';
import styles
  from './medicalHistoryForm.styles';
import PreviewMedicalHistoryModal from './container/PreviewMedicalHistoryModal';

export default function MedicalHistoryForm() {
  const userProfile = useSelector(selectUserProfile);
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [
    preFilledMedicalForm, setPreFilledMedicalHistoryForm,
  ] = useState<MedicalHistoryFormInitialState>(medicalHistoryFormInitialState);

  const [requestDanglingBlock, requestDanglingBlockResponse] = useRequestDanglingBlockMutation();

  function toggleModalOpen() {
    setIsModalOpen(!isModalOpen);
  }

  async function formSubmitHandler(
    value: MedicalHistoryFormInitialState,
    helpers: FormikHelpers<MedicalHistoryFormInitialState>,
  ) {
    helpers.setSubmitting(false);
    setPreFilledMedicalHistoryForm(value);
    toggleModalOpen();
  }

  async function onPreviewSaveConfirmation() {
    try {
      toggleModalOpen();
      const { cipherKey: cipherKeyForTheMessage, ...rest } = preFilledMedicalForm;
      await requestDanglingBlock({
        variables: {
          message: JSON.stringify(rest),
          cipherKeyForTheMessage,
        },
      });
    } catch (e) {
      console.log('onPreviewSaveConfirmation e()', e);
      Alert.alert('Error', e.message);
    }
  }

  useEffect(() => {
    if (userProfile?.get('firstName')) {
      setPreFilledMedicalHistoryForm({
        ...preFilledMedicalForm,
        firstName: userProfile.get('firstName'),
        lastName: userProfile.get('lastName'),
        middleName: userProfile.get('middleName'),
      });
    }
  }, [userProfile]);

  useEffect(() => {
    // eslint-disable-next-line no-underscore-dangle
    if (requestDanglingBlockResponse.data?.requestDanglingBlock) {
      const block = {
        ...requestDanglingBlockResponse.data?.requestDanglingBlock,
        user: {
          firstName: userProfile.get('firstName'),
          lastName: userProfile.get('lastName'),
          middleName: userProfile.get('middleName'),
        },
      };
      dispatch(addDanglingBlock(
        block as TRequestedDanglingBlock,
      ));
      dispatch(addMyDanglingBlock(
        block as TRequestedDanglingBlock,
      ));
      Alert.alert('Success', 'Block requested');
      setPreFilledMedicalHistoryForm(medicalHistoryFormInitialState);
    }
  }, [requestDanglingBlockResponse]);

  if (isModalOpen && preFilledMedicalForm) {
    return (
      <PreviewMedicalHistoryModal
        {...{
          isModalOpen,
          toggleModalOpen,
          previewFormState: preFilledMedicalForm,
          onPreviewSaveConfirmation,
        }}
      />
    );
  }

  return (
    <View style={styles.container}>
      { requestDanglingBlockResponse.loading && <Loader /> }
      <Formik
        initialValues={preFilledMedicalForm}
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
