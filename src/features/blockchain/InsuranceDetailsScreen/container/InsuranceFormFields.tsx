import React from 'react';
import Input from 'UI/Input';
import DateTimePicker from 'UI/DateTimePicker';
import CipherKeyFormikInput
  from 'features/blockchain/MedicalHistoryFormScreen/container/MedicalHistoryFormFields/CipherKeyFormikInput';

export default function InsuranceFormFields() {
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
      {/* TODO: upload image[] */}
      <CipherKeyFormikInput />
    </>
  );
}
