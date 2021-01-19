import React from 'react';
import TextUI from 'UI/TextUI';
// @ts-ignore
import { FONT_SIZES } from 'constants';
import theme from 'theme';

type Props = {
  error: string
};

export default function FormikErrorUI({ error }: Props) {
  return (
    <>
      {!!error && (
        <TextUI fontSize={FONT_SIZES.SMALL_TEXT} color={theme.RED}>
          {error.toUpperCase()}
        </TextUI>
      )}
    </>
  );
}
