import React from 'react';
import Input from 'UI/Input';
import DateTimePicker from 'UI/DateTimePicker';
import CipherKeyFormikInput
  from 'features/blockchain/MedicalHistoryFormScreen/container/MedicalHistoryFormFields/CipherKeyFormikInput';
import FileUpload from 'UI/FileUpload/FileUpload';
import { DocumentPickerHandlerResponse } from 'types';
import { DocumentPickerResponse } from 'react-native-document-picker';

export default function InsuranceFormFields() {
  function documentPickerHandler(file: DocumentPickerHandlerResponse | DocumentPickerResponse[]) {
    console.log({ file });
  }
  return (
    <>
      <Input
        placeholder="Policy Number *"
        fieldName="policyNumber"
        autoFocus
        iconProps={{ name: 'shield-account' }}
      />
      <DateTimePicker fieldName="validFrom" placeholder="Valid From" />
      <DateTimePicker fieldName="validTo" placeholder="Valid To" />
      <CipherKeyFormikInput />
      <FileUpload documentPickerHandler={documentPickerHandler} />
    </>
  );
}
