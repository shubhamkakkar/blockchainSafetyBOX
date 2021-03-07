import React from 'react';
import Header from 'UI/Header';
import { ScrollView } from 'react-native';
import styles
  from 'features/blockchain/MedicalHistoryFormScreen/container/PreviewMedicalHistoryModal/previewMedicalHistoryModal.styles';
import ModalUI from 'UI/ModalUI/ModalUI';
import CipherKeyPreview
  from 'features/blockchain/MedicalHistoryFormScreen/container/PreviewMedicalHistoryModal/CipherKeyPreview';
import { InitialInsuranceDetailsState } from 'features/blockchain/InsuranceDetailsScreen/insuranceDetailsScreen.formik';
import LayoutAnimationWrapper from 'UI/LayoutAnimationWrapper';
import TextUI from 'UI/TextUI';
import ListSelectedImages
  from 'features/blockchain/InsuranceDetailsScreen/container/ListSelectedImages';

type Props = {
  isModalOpen: boolean;
  toggleModalOpen?: () => void;
  isBlockPreview?: boolean;
  previewFormState: InitialInsuranceDetailsState;
};
export default function PreviewInsuranceInformation(props: Props) {
  const fakeFunction = () => {};

  const previewContent = (
    <>
      {!props.isBlockPreview && <CipherKeyPreview cipherKey={props.previewFormState.cipherKey} />}
      <LayoutAnimationWrapper title="Policy Number" expanded>
        <TextUI>{props.previewFormState.policyNumber}</TextUI>
      </LayoutAnimationWrapper>
      <LayoutAnimationWrapper title="Valid from" expanded>
        <TextUI>{props.previewFormState.validFrom}</TextUI>
      </LayoutAnimationWrapper>
      <LayoutAnimationWrapper title="Valid to" expanded>
        <TextUI>{props.previewFormState.validTo}</TextUI>
      </LayoutAnimationWrapper>
      <ListSelectedImages images={props.previewFormState.urls} isHorizontal />
    </>
  );

  if (props.isBlockPreview) {
    return previewContent;
  }

  return (
    <ModalUI
      visible={props.isModalOpen}
      onRequestClose={props.toggleModalOpen || fakeFunction}
    >
      <Header
        title="Preview"
        onBackClick={props.toggleModalOpen || fakeFunction}
      />
      <ScrollView style={styles.container}>
        {previewContent}
      </ScrollView>
    </ModalUI>
  );
}
