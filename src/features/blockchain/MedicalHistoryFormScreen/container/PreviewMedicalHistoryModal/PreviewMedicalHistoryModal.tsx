import React from 'react';
import ModalUI from 'UI/ModalUI';
import Header from 'UI/Header';
import LayoutAnimationWrapper from 'UI/LayoutAnimationWrapper';
import { ScrollView } from 'react-native';
import KeyValuePairRow from 'UI/KeyValuePairRow';
import ComplimentaryButtons from 'UI/Buttons/ComplimentaryButtons';
import { MedicalHistoryFormInitialState } from '../../medicalHistoryForm.formik';
import styles from './previewMedicalHistoryModal.styles';

type Props = {
  isModalOpen: boolean,
  toggleModalOpen: () => void;
  previewFormState: MedicalHistoryFormInitialState;
  onPreviewSaveConfirmation: () => void
};
export default function PreviewMedicalHistoryModal(props: Props) {
  return (
    <ModalUI
      visible={props.isModalOpen}
      onRequestClose={props.toggleModalOpen}
    >
      <Header title="Preview" onBackClick={props.toggleModalOpen} />
      <ScrollView style={styles.container}>
        <LayoutAnimationWrapper title="Security" expanded>
          <KeyValuePairRow label="Cipher Key" value={props.previewFormState.cipherKey} />
        </LayoutAnimationWrapper>
        <LayoutAnimationWrapper title="Name" expanded>
          <KeyValuePairRow label="First Name" value={props.previewFormState.firstName} />
          <KeyValuePairRow label="Middle Name" value={props.previewFormState.middleName} />
          <KeyValuePairRow label="Last Name" value={props.previewFormState.lastName} />
        </LayoutAnimationWrapper>
        <LayoutAnimationWrapper title="Contact and Address" expanded>
          <KeyValuePairRow label="Phone" value={props.previewFormState.phoneNumber} />
          <KeyValuePairRow label="Address Line 1" value={props.previewFormState.addressLine1} />
          <KeyValuePairRow label="Address Line 2" value={props.previewFormState.addressLine2} />
          <KeyValuePairRow label="City" value={props.previewFormState.city} />
          <KeyValuePairRow label="State" value={props.previewFormState.state} />
          <KeyValuePairRow label="Pin Code" value={props.previewFormState.pinCode} />
          <KeyValuePairRow label="Country" value={props.previewFormState.country} />
        </LayoutAnimationWrapper>
        <LayoutAnimationWrapper title="Personal" expanded>
          <KeyValuePairRow label="Gender" value={props.previewFormState.gender} />
          <KeyValuePairRow label="DOB" value={props.previewFormState.dateOfBirth.toDateString()} />
          <KeyValuePairRow label="Weight (in KG)" value={props.previewFormState.weight} />
          <KeyValuePairRow label="Height (in cm)" value={props.previewFormState.height} />
        </LayoutAnimationWrapper>
        <LayoutAnimationWrapper title="Miscellaneous" expanded>
          <KeyValuePairRow
            label="Any significant medical history"
            value={props.previewFormState.significantMedicalHistoryNote}
          />
          <KeyValuePairRow
            label="List of medical problems"
            value={props.previewFormState.listMedicalProblemNote}
          />
          <KeyValuePairRow
            label="List any medicine taken regularly"
            value={props.previewFormState.listMedicineTakenRegularlyNote}
          />

        </LayoutAnimationWrapper>
      </ScrollView>
      <ComplimentaryButtons
        complimentaryButtonTitle="Edit"
        primaryButtonTitle="Submit"
        primaryButtonIcon="checkbox-marked-circle-outline"
        complimentaryButtonIcon="circle-edit-outline"
        onComplimentaryButtonPresHandler={props.toggleModalOpen}
        onPrimaryButtonPressHandler={props.onPreviewSaveConfirmation}
      />
    </ModalUI>
  );
}
