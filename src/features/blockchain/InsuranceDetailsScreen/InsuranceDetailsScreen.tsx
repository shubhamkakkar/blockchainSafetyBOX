import React from 'react';
import MainContainer from 'UI/MainContainer';
import { View } from 'react-native';
import KeyboardAvoidingViewUI from 'UI/KeyboardAvoidingViewUI';
import { Formik, FormikHelpers } from 'formik';
import AnimatedButton from 'UI/Buttons/AnimatedButton';
import { useRequestDanglingBlockMutation } from 'generated/graphql';
import InsuranceFormFields from './container/InsuranceFormFields';
import styles from './insuranceDetailsScreen.styles';
import {
  initialInsuranceDetailsState,
  insuranceDetailsSchema,
  InitialInsuranceDetailsState,
} from './insuranceDetailsScreen.formik';

export default function InsuranceDetailsScreen() {
  const [requestDanglingBlock, requestDanglingBlockResponse] = useRequestDanglingBlockMutation();

  async function formSubmitHandler(
    value: InitialInsuranceDetailsState,
    helpers: FormikHelpers<InitialInsuranceDetailsState>,
  ) {
    helpers.setSubmitting(false);
    const { cipherKey, ...rest } = value;
    await requestDanglingBlock({
      variables: { message: JSON.stringify(rest), cipherKeyForTheMessage: cipherKey },
    });
  }

  return (
    <MainContainer>
      <KeyboardAvoidingViewUI>
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
            }) => (
              <>
                <InsuranceFormFields />
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
      </KeyboardAvoidingViewUI>
    </MainContainer>
  );
}
