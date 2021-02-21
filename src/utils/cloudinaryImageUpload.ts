import { ImagePickerResponse } from 'react-native-image-picker';
// @ts-ignore
import { CLOUDINARY } from 'constants';

async function cloudinaryImageUpload(images: ImagePickerResponse[]) {
  const URLs = [];
  let index = images.length;
  while (index) {
    index -= 1;
    const image = images[URLs.length];
    try {
      const data = new FormData();
      data.append('file', image as any);
      data.append('upload_preset', CLOUDINARY.UPLOAD_PRESET);
      data.append('cloud_name', CLOUDINARY.CLOUD_NAME);
      // eslint-disable-next-line no-await-in-loop
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUDINARY.CLOUD_NAME}/image/upload`, {
          method: 'post',
          body: data,
        },
      );
      // eslint-disable-next-line no-await-in-loop
      const JSONResponse = await response.json();
      if (JSONResponse.secure_url) URLs.push(JSONResponse.secure_url);
    } catch (e) {
      console.log('cloudinaryImageUpload e', e);
    }
  }
  return URLs;
}

export default cloudinaryImageUpload;
