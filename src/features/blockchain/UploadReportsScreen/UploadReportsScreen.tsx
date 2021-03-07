import React, { useEffect, useMemo, useState } from 'react';
import MainContainer from 'UI/MainContainer';
import ImagePicker from 'UI/ImagePicker';
import ListSelectedImages
  from 'features/blockchain/InsuranceDetailsScreen/container/ListSelectedImages';
import { ImagePickerResponse } from 'react-native-image-picker';
import MedicalFormsSegmentedTabs
  from 'navigationContainer/RequestedDanglingBlockStack/MedicalFormsTopBarNavigation/container/MedicalFormsSegmentedTabs';
import { UploadReportsScreenNavigationProps } from 'navigationContainer/navigation';
import { Alert, View } from 'react-native';
import AnimatedButton from 'UI/Buttons/AnimatedButton';
import cloudinaryImageUpload from 'utils/cloudinaryImageUpload';
import { RequestedBlockMessage, useRequestDanglingBlockMutation } from 'generated/graphql';
import CipherKeyFormikInput
  from 'features/blockchain/MedicalHistoryFormScreen/container/MedicalHistoryFormFields/CipherKeyFormikInput';
import danglingBlockDispatchHandler from 'utils/danglingBlockDispatchHandler';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserProfile } from 'store/selectors/user.selectors';
import styles from './uploadReportsScreen.styles';

export default function UploadReportsScreen({ navigation } : UploadReportsScreenNavigationProps) {
  const [images, setImages] = useState<ImagePickerResponse[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [cipherKey, setCipherKey] = useState<string>('');
  const [requestDanglingBlock, requestDanglingBlockResponse] = useRequestDanglingBlockMutation();
  const userProfile = useSelector(selectUserProfile);
  const dispatch = useDispatch();

  function resetState() {
    setCipherKey('');
    setImages([]);
  }

  useEffect(() => {
    if (requestDanglingBlockResponse.data?.requestDanglingBlock) {
      danglingBlockDispatchHandler(
        requestDanglingBlockResponse.data?.requestDanglingBlock, userProfile, dispatch,
      );
      Alert.alert('Success', 'Block requested');
      resetState();
    }
  }, [requestDanglingBlockResponse.data]);

  function onImagePickerPressHandler(image: ImagePickerResponse) {
    if (!image.errorCode) {
      setImages([...images, {
        uri: image.uri,
        type: image.type,
        // @ts-ignore
        name: image.fileName,
      },
      ]);
    }
  }

  function removeImage(index: number) {
    setImages(images.filter(
      (_image, imageIndex) => imageIndex !== index,
    ));
  }

  async function onSubmitPress() {
    setIsLoading(true);
    try {
      const urls = await cloudinaryImageUpload(images);
      await requestDanglingBlock({
        variables: {
          message: JSON.stringify(urls),
          cipherKeyForTheMessage: cipherKey,
          messageType: RequestedBlockMessage.MedicalReports,
        },
      });
      console.log({ urls });
    } catch (e) {
      console.log('UploadReportsScreen onSubmitPress e()', e);
      alert('Failed to upload');
    } finally {
      setIsLoading(false);
    }
  }

  function onChangeCipherKeyTextHandler(text: string) {
    setCipherKey(text);
  }

  const isDisabled = useMemo(() => !images.length || !cipherKey, [images, cipherKey]);

  return (
    <MainContainer>
      <MedicalFormsSegmentedTabs navigation={navigation} activeIndex={2} />
      <View style={styles.container}>
        <ListSelectedImages images={images} removeImage={removeImage} numColumns={3} />
        <ImagePicker onImagePickerPressHandler={onImagePickerPressHandler} />
        <CipherKeyFormikInput
          isNotFormik
          value={cipherKey}
          onChangeText={onChangeCipherKeyTextHandler}
        />
        <AnimatedButton
          title="Submit"
          onPress={onSubmitPress}
          isLoading={isLoading}
          disabled={isLoading || isDisabled}
        />
      </View>
    </MainContainer>
  );
}
