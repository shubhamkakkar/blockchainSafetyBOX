import React, { useState } from 'react';
import MainContainer from 'UI/MainContainer';
import ImagePicker from 'UI/ImagePicker';
import ListSelectedImages
  from 'features/blockchain/InsuranceDetailsScreen/container/ListSelectedImages';
import { ImagePickerResponse } from 'react-native-image-picker';
import MedicalFormsSegmentedTabs
  from 'navigationContainer/RequestedDanglingBlockStack/MedicalFormsTopBarNavigation/container/MedicalFormsSegmentedTabs';
import { UploadReportsScreenNavigationProps } from 'navigationContainer/navigation';
import { View } from 'react-native';
import styles from './uploadReportsScreen.styles';

export default function UploadReportsScreen({ navigation } : UploadReportsScreenNavigationProps) {
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
      <MedicalFormsSegmentedTabs navigation={navigation} activeIndex={2} />
      <View style={styles.container}>
        <ListSelectedImages images={images} removeImage={removeImage} numColumns={2} />
        <ImagePicker onImagePickerPressHandler={onImagePickerPressHandler} />
      </View>
    </MainContainer>
  );
}
