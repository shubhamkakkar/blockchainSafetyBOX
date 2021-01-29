import React, { useEffect } from 'react';
import MainContainer from 'UI/MainContainer';
import { Alert, View } from 'react-native';
import KeyboardAvoidingViewUI from 'UI/KeyboardAvoidingViewUI';
import { Formik, FormikHelpers } from 'formik';
import AnimatedButton from 'UI/Buttons/AnimatedButton';
import { TRequestedDanglingBlock, useRequestDanglingBlockMutation } from 'generated/graphql';
import { addDanglingBlock, addMyDanglingBlock } from 'store/actions/danglingBlocks.actions';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserProfile } from 'store/selectors/user.selectors';
import InsuranceFormFields from './container/InsuranceFormFields';
import styles from './insuranceDetailsScreen.styles';
import {
  initialInsuranceDetailsState,
  insuranceDetailsSchema,
  InitialInsuranceDetailsState,
} from './insuranceDetailsScreen.formik';

export default function InsuranceDetailsScreen() {
  const userProfile = useSelector(selectUserProfile);
  const dispatch = useDispatch();
  const [requestDanglingBlock, requestDanglingBlockResponse] = useRequestDanglingBlockMutation();
  useEffect(() => {
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
    }
  }, [requestDanglingBlockResponse]);
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
