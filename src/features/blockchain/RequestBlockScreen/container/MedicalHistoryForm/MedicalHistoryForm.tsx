import React from 'react';
import { View } from 'react-native';
import { Formik, FormikHelpers } from 'formik';
import Input from 'UI/Input';
import LayoutAnimationWrapper from 'UI/LayoutAnimationWrapper';
import ToggleActionRow from 'UI/ToggleActionRow';
import DateTimePicker from 'UI/DateTimePicker';
import AnimatedButton from 'UI/Buttons/AnimatedButton';
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
    /*
* send this value in a param for preview, if that preview is edited. re initialize this screen
* else send the value as stringifies object with "cipher key input"
* */
  }

  return (
    <View style={styles.container}>
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
            <LayoutAnimationWrapper title="Name" expanded>
              <Input
                placeholder="First name *"
                iconProps={{ name: 'account' }}
                fieldName="firstName"
                autoFocus
              />
              <Input
                placeholder="Middle name"
                iconProps={{ name: 'account' }}
                fieldName="middleName"
              />
              <Input
                placeholder="Last name *"
                textContentType="name"
                iconProps={{ name: 'account' }}
                fieldName="lastName"
              />
            </LayoutAnimationWrapper>
            <LayoutAnimationWrapper title="Contact and Address" expanded>
              <Input
                placeholder="Phone *"
                textContentType="telephoneNumber"
                iconProps={{ name: 'phone' }}
                fieldName="phoneNumber"
                keyboardType="phone-pad"
              />
              <Input
                placeholder="Address Line 1 *"
                textContentType="fullStreetAddress"
                iconProps={{ name: 'home-city' }}
                fieldName="addressLine1"
                numberOfLines={2}
                multiline
                scrollEnabled
              />
              <Input
                placeholder="Address Line 2"
                textContentType="fullStreetAddress"
                iconProps={{ name: 'home-city' }}
                fieldName="addressLine2"
                numberOfLines={2}
                multiline
                scrollEnabled
              />
              <Input
                placeholder="City *"
                textContentType="addressCity"
                iconProps={{ name: 'city' }}
                fieldName="city"
              />
              <Input
                placeholder="State *"
                textContentType="addressState"
                iconProps={{ name: 'city' }}
                fieldName="state"
              />
              <Input
                placeholder="Pin Code *"
                textContentType="postalCode"
                iconProps={{ name: 'city' }}
                fieldName="pinCode"
                keyboardType="phone-pad"
              />
              <Input
                placeholder="Country *"
                textContentType="countryName"
                iconProps={{ name: 'flag-variant-outline' }}
                fieldName="country"
              />
            </LayoutAnimationWrapper>
            <LayoutAnimationWrapper title="Personal" expanded>
              <ToggleActionRow
                leftTitle="Male"
                rightTitle="Female"
                fieldName="gender"
                defaultFieldValue="Male"
                toggleToFieldValue="Female"
              />
              <DateTimePicker fieldName="dateOfBirth" />
              <Input
                placeholder="Weight (in KG) *"
                iconProps={{ name: 'weight-kilogram' }}
                fieldName="weight"
                keyboardType="numeric"
              />
              <Input
                placeholder="Height (in cm) *"
                iconProps={{ name: 'human-male-height' }}
                fieldName="height"
                keyboardType="numeric"
              />
            </LayoutAnimationWrapper>
            <LayoutAnimationWrapper title="Miscellaneous" expanded>
              <Input
                placeholder="Any significant medical history"
                fieldName="significantMedicalHistoryNote"
                numberOfLines={2}
                multiline
                scrollEnabled
              />
              <Input
                placeholder="List of medical problems"
                fieldName="listMedicalProblemNote"
                numberOfLines={2}
                multiline
                scrollEnabled
              />
              <Input
                placeholder="List any medicine taken regularly"
                fieldName="listMedicineTakenRegularlyNote"
                numberOfLines={2}
                multiline
                scrollEnabled
              />
            </LayoutAnimationWrapper>
            <View style={styles.submitButtonContainer}>
              <AnimatedButton
                disabled={isSubmitting || !isValid}
                isLoading={isSubmitting}
                title="Submit"
                onPress={handleSubmit}
                // isFailed={authenticatedResponse.error}
                // isSuccess={!!authenticatedResponse?.token}
              />
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
}
