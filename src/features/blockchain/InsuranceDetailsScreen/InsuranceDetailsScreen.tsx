import React, { useEffect } from 'react';
import MainContainer from 'UI/MainContainer';
import { Alert, View } from 'react-native';
import KeyboardAvoidingViewUI from 'UI/KeyboardAvoidingViewUI';
import { Formik, FormikHelpers } from 'formik';
import AnimatedButton from 'UI/Buttons/AnimatedButton';
import { RequestedBlockMessage, useRequestDanglingBlockMutation } from 'generated/graphql';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserProfile } from 'store/selectors/user.selectors';
import danglingBlockDispatchHandler from 'utils/danglingBlockDispatchHandler';
import cloudinaryImageUpload from 'utils/cloudinaryImageUpload';
import InsuranceFormFields from './container/InsuranceFormFields';
import styles from './insuranceDetailsScreen.styles';
import {
  initialInsuranceDetailsState,
  InitialInsuranceDetailsState,
  insuranceDetailsSchema,
} from './insuranceDetailsScreen.formik';

export default function InsuranceDetailsScreen() {
  const userProfile = useSelector(selectUserProfile);
  const dispatch = useDispatch();
  const [requestDanglingBlock, requestDanglingBlockResponse] = useRequestDanglingBlockMutation();
  useEffect(() => {
    if (requestDanglingBlockResponse.data?.requestDanglingBlock) {
      danglingBlockDispatchHandler(
        requestDanglingBlockResponse.data?.requestDanglingBlock, userProfile, dispatch,
      );
      Alert.alert('Success', 'Block requested');
    }
  }, [requestDanglingBlockResponse]);
  async function formSubmitHandler(
    value: InitialInsuranceDetailsState,
    helpers: FormikHelpers<InitialInsuranceDetailsState>,
  ) {
    const { cipherKey, images, ...rest } = value;
    try {
      // @ts-ignore
      rest.urls = await cloudinaryImageUpload(images);
      await requestDanglingBlock({
        variables: {
          message: JSON.stringify(rest),
          cipherKeyForTheMessage: cipherKey,
          messageType: RequestedBlockMessage.InsuranceInformation,
        },
      });
      helpers.resetForm();
    } catch (er) {
      console.log('formSubmitHandler error()', er);
    } finally {
      helpers.setSubmitting(false);
    }
  }

  return (
    <MainContainer>
      <View style={[styles.container, styles.boundarySpacer]}>
        <Formik
          initialValues={initialInsuranceDetailsState}
          onSubmit={formSubmitHandler}
          validationSchema={insuranceDetailsSchema}
          enableReinitialize
        >
          {({
            handleSubmit,
            isSubmitting,
            isValid,
            values,
            setFieldValue,
          }) => (
            <>
              <KeyboardAvoidingViewUI>
                <InsuranceFormFields
                  images={values.images}
                  setFieldValue={setFieldValue}
                />
              </KeyboardAvoidingViewUI>
              <AnimatedButton
                disabled={isSubmitting
            || !isValid
            || requestDanglingBlockResponse.loading}
                isLoading={isSubmitting || requestDanglingBlockResponse.loading}
                title="Submit"
                onPress={handleSubmit as any}
              />
            </>
          )}
        </Formik>
      </View>
    </MainContainer>
  );
}
