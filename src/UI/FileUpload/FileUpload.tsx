import React from 'react';
import Button from 'UI/Buttons';
import DocumentPicker, { DocumentPickerResponse } from 'react-native-document-picker';
import { DocumentPickerHandlerResponse } from 'types';
import theme from 'theme';
import BorderButton from 'UI/Buttons/BorderButton';

type Props = {
  title?: string;
  documentPickerHandler: (_file: DocumentPickerHandlerResponse | DocumentPickerResponse[]) => void
};

export default function FileUpload({
  documentPickerHandler,
  title = 'Upload Document',
}: Props) {
  async function documentPicker() {
    try {
      const results = await DocumentPicker.pickMultiple({
        type: [DocumentPicker.types.allFiles],
      });
      return documentPickerHandler(results);
    } catch (error) {
      return documentPickerHandler({
        error,
      });
    }
  }

  return (
    <BorderButton
      onPress={documentPicker}
      title={title}
      leftIcon={{ name: 'file-upload', color: theme.DARK_PRIMARY }}
      style={{ borderColor: theme.DARK_PRIMARY, paddingVertical: 10, borderRadius: 20 }}
      textStyle={{ color: theme.DARK_PRIMARY }}
    />
  );
}
