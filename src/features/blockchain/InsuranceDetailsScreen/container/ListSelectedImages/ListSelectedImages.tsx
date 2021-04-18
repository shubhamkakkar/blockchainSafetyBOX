import React, { useState } from 'react';
import { FlatList, ImageBackground, TouchableOpacity } from 'react-native';
import { ImagePickerResponse } from 'react-native-image-picker';
import Icon from 'UI/Icon';
import EmptyUI from 'UI/EmptyUI';
import ImageView from "react-native-image-viewing";
import styles from './listSelectedImages.styles';

type Props = {
  images: ImagePickerResponse[];
  removeImage?: (_index: number) => void;
  isHorizontal?: boolean;
  numColumns?: number
};

export default function ListSelectedImages(props: Props) {
  const [isCarouselOpen, setIsCarouselOpen] = useState<boolean>(false)
  function toggleCarouselModal(){
    setIsCarouselOpen(prevState => !prevState)
  }
  function renderImages(image: ImagePickerResponse, index: number, isFullScreen?: boolean) {
    function onRemoveImagePressHandler() {
      if (props.removeImage) props.removeImage(index);
    }
    return (
      <TouchableOpacity onPress={toggleCarouselModal} style={[isFullScreen && { flex: 1 }]}>
        <ImageBackground
        source={{ uri: image.uri }}
        style={[styles.image, isFullScreen && { width: '80%', height:'100%' }]}
        resizeMode="contain"
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
      </TouchableOpacity>
    );
  }

  const ListImages = ({ isFullScreen }: { isFullScreen?: boolean }) => (
      <FlatList<ImagePickerResponse>
          data={props.images}
          extraData={props.images}
          renderItem={({
                         item,
                         index,
                       }) => renderImages(item, index, isFullScreen) as any}
          keyExtractor={(image) => image.uri?.toString() || ''}
          contentContainerStyle={styles.contentContainerStyle}
          horizontal={!!props.isHorizontal}
          numColumns={props.numColumns || 1}
          ListEmptyComponent={<EmptyUI />}
      />
  )

  if(isCarouselOpen){
    const images = props.images.map( image => ({ uri : image.uri }));

    return  (
        <ImageView
            images={images}
            imageIndex={0}
            visible
            onRequestClose={toggleCarouselModal}
        />
    )
  }

  return (
    <ListImages />
  );
}
