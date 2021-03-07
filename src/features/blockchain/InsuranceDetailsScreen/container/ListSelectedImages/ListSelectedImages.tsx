import React from 'react';
import { FlatList, ImageBackground, TouchableOpacity } from 'react-native';
import { ImagePickerResponse } from 'react-native-image-picker';
import Icon from 'UI/Icon';
import EmptyUI from 'UI/EmptyUI';
import styles from './listSelectedImages.styles';

type Props = {
  images: ImagePickerResponse[];
  removeImage?: (_index: number) => void;
  isHorizontal?: boolean;
  numColumns?: number
};

export default function ListSelectedImages(props: Props) {
  function renderImages(image: ImagePickerResponse, index: number) {
    function onRemoveImagePressHandler() {
      if (props.removeImage) props.removeImage(index);
    }
    return (
      <ImageBackground
        source={{ uri: image.uri }}
        style={styles.image}
      >
        {props.removeImage && (
        <TouchableOpacity
          onPress={onRemoveImagePressHandler}
          style={styles.deleteIconButton}
        >
          <Icon name="delete" style={styles.deleteIcon} />
        </TouchableOpacity>
        )}
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
      keyExtractor={(image) => image.uri?.toString() || ''}
      contentContainerStyle={styles.contentContainerStyle}
      horizontal={!!props.isHorizontal}
      numColumns={props.numColumns || 1}
      ListEmptyComponent={<EmptyUI />}
    />
  );
}
