import { ImagePickerResponse } from 'react-native-image-picker';
// @ts-ignore
import { CLOUDINARY } from 'constants';

async function cloudinaryImageUpload(images: ImagePickerResponse[]) {
  const URLs:ImagePickerResponse[] = [];
  let index = images.length;
  while (index) {
    index -= 1;
    try {
      const data = new FormData();
      data.append('file', images[URLs.length] as any);
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
      if (JSONResponse.secure_url) URLs.push({ uri: JSONResponse.secure_url });
    } catch (e) {
      console.log('cloudinaryImageUpload e', e);
    }
  }
  return URLs;
}

export default cloudinaryImageUpload;
