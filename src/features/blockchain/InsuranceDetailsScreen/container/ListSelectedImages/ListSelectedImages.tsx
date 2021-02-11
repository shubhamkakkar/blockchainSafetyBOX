import React from 'react';
import { FlatList, ImageBackground, TouchableOpacity } from 'react-native';
import { ImagePickerResponse } from 'react-native-image-picker';
import Icon from 'UI/Icon';
import styles from './listSelectedImages.styles';

type Props = {
  images: ImagePickerResponse[];
  removeImage: (_index: number) => void;
};

export default function ListSelectedImages(props: Props) {
  console.log(props.images);

  function renderImages(image: ImagePickerResponse, index: number) {
    function onRemoveImagePressHandler() {
      props.removeImage(index);
    }

    return (
      <ImageBackground
        source={{ uri: image.uri }}
        style={styles.image}
      >
        <TouchableOpacity
          onPress={onRemoveImagePressHandler}
          style={styles.deleteIconButton}
        >
          <Icon name="delete" isError />
        </TouchableOpacity>

      </ImageBackground>
    );
  }

  return (
    <FlatList<ImagePickerResponse>
      data={props.images}
      extraData={props.images}
      renderItem={({
        item,
        index,
      }) => renderImages(item, index) as any}
      keyExtractor={(image) => image?.uri?.toString() || ''}
      horizontal
      contentContainerStyle={styles.contentContainerStyle}
    />

  );
}
