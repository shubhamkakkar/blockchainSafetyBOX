import React from 'react';
import theme from 'theme';
// @ts-ignore
import { FONT_SIZES } from 'constants';
import TextUI from 'UI/TextUI';

type Props = {
  itemKey: 'ownerProfile' | 'user';
  item: any
};
export default function CreatedBy({ itemKey, item }: Props) {
  return (
    <TextUI color={theme.GREY} fontSize={FONT_SIZES.SMALL_TEXT}>
      {`By ${item.get(itemKey)
        ?.get('firstName')} ${item.get(itemKey)
        ?.get('lastName')}`}
    </TextUI>
  );
}
