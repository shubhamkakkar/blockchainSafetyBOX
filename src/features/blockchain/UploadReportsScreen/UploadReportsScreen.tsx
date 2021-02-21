import React, { useState } from 'react';
import MainContainer from 'UI/MainContainer';
import ImagePicker from 'UI/ImagePicker';
import ListSelectedImages
  from 'features/blockchain/InsuranceDetailsScreen/container/ListSelectedImages';
import { ImagePickerResponse } from 'react-native-image-picker';

export default function UploadReportsScreen() {
  const [images, setImages] = useState<ImagePickerResponse[]>([]);

  function onImagePickerPressHandler(image: ImagePickerResponse) {
    if (!image.errorCode) {
      setImages([...images, image]);
    }
  }

  function removeImage(index: number) {
    setImages(images.filter(
      (_image, imageIndex) => imageIndex !== index,
    ));
  }

  return (
    <MainContainer>
      <ListSelectedImages images={images} removeImage={removeImage} numColumns={2} />
      <ImagePicker onImagePickerPressHandler={onImagePickerPressHandler} />
    </MainContainer>
  );
}
