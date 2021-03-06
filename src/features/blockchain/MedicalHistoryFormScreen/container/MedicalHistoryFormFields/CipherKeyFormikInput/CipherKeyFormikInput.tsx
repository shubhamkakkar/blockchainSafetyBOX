import React from 'react';
import Input from 'UI/Input';
import LayoutAnimationWrapper from 'UI/LayoutAnimationWrapper';
import TextInput, { Props } from 'UI/Input/TextInput/TextInput';

export default function CipherKeyFormikInput({
  isNotFormik,
  ...rest
}: Props) {
  return (
    <LayoutAnimationWrapper title="Security" expanded>
      {isNotFormik
        ? (
          <TextInput
            placeholder="Cipher Key *"
            {...rest}
          />
        )
        : (
          <Input
            placeholder="Cipher Key *"
            iconProps={{ name: 'shield-plus' }}
            fieldName="cipherKey"
          />
        )}
    </LayoutAnimationWrapper>
  );
}
