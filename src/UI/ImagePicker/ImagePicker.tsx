import React, { useMemo, useRef } from 'react';
import {
  CameraOptions,
  ImagePickerResponse,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';
import theme from 'theme';
import BorderButton from 'UI/Buttons/BorderButton';
import ActionSheet from 'react-native-actions-sheet';
import { View } from 'react-native';
import Separator from 'UI/Separator';
import styles from './imagePicker.styles';

type Props = {
  title?: string;
  onImagePickerPressHandler: (_image: ImagePickerResponse) => void
};

export default function ImagePicker({
  onImagePickerPressHandler,
  title = 'Upload Document',
}: Props) {
  const actionSheetRef = useRef<null | ActionSheet>(null);
  const imagePickerCameraOptions: CameraOptions = useMemo(() => ({
    mediaType: 'photo',
    includeBase64: true,
    maxWidth: 500,
    maxHeight: 500,
  }), []);

  function openActionSheet() {
    actionSheetRef.current?.setModalVisible(true);
  }

  function closeActionSheet() {
    actionSheetRef.current?.setModalVisible(false);
  }

  async function onImagePickerPress(isCamera?: boolean) {
    const launcher = isCamera ? launchCamera : launchImageLibrary;
    launcher(
      imagePickerCameraOptions,
      (response) => {
        if (!response.didCancel) {
          closeActionSheet();
          onImagePickerPressHandler(response);
        }
      },
    );
  }

  function onCameraPresHandler() {
    return onImagePickerPress(true);
  }

  function onSelectFromGalleryPressHandler() {
    return onImagePickerPress();
  }

  return (
    <>
      <BorderButton
        onPress={openActionSheet}
        title={title}
        leftIcon={{
          name: 'file-upload',
          color: theme.DARK_PRIMARY,
        }}
        style={styles.fileUploadButton}
        textStyle={styles.fileUploadButtonText}
      />
      <ActionSheet ref={actionSheetRef} initialOffsetFromBottom={100}>
        <View style={[styles.actionSheetContentContainer]}>
          <BorderButton
            title="Camera"
            onPress={onCameraPresHandler}
            style={styles.noBorder}
            textStyle={styles.fileUploadButtonText}
          />
          <Separator />
          <BorderButton
            title="Select from Gallery"
            onPress={onSelectFromGalleryPressHandler}
            style={styles.noBorder}
            textStyle={styles.fileUploadButtonText}
          />
        </View>
      </ActionSheet>
    </>

  );
}
