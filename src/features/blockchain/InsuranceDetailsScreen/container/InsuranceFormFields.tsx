import React from 'react';
import Input from 'UI/Input';
import DateTimePicker from 'UI/DateTimePicker';
import ImagePicker from 'UI/ImagePicker/ImagePicker';
import { ImagePickerResponse } from 'react-native-image-picker';
import ListSelectedImages
  from 'features/blockchain/InsuranceDetailsScreen/container/ListSelectedImages';
import CipherKeyFormikInput
  from '../../MedicalHistoryFormScreen/container/MedicalHistoryFormFields/CipherKeyFormikInput';

type Props = {
  images: ImagePickerResponse[];
  setFieldValue: (_field: string, _value: any, _shouldValidate?: boolean) => void;
  fieldName: string
};

export default function InsuranceFormFields(props: Props) {
  function onImagePickerPressHandler(image: ImagePickerResponse) {
    if (!image.errorCode) {
      props.images.push({
        uri: image.uri,
        type: image.type,
        // @ts-ignore
        name: image.fileName,
      });
      props.setFieldValue(props.fieldName, props.images);
    }
  }

  function removeImage(index: number) {
    const images = props.images.filter(
      (_image, imageIndex) => imageIndex !== index,
    );
    props.setFieldValue(props.fieldName, images);
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
      <ImagePicker onImagePickerPressHandler={onImagePickerPressHandler} />
      <ListSelectedImages images={props.images} removeImage={removeImage} isHorizontal />
    </>
  );
}
