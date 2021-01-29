import React from 'react';
import Input from 'UI/Input';
import LayoutAnimationWrapper from 'UI/LayoutAnimationWrapper';

export default function CipherKeyFormikInput() {
  return (
    <LayoutAnimationWrapper title="Security" expanded>
      <Input
        placeholder="Cipher Key *"
        iconProps={{ name: 'shield-plus' }}
        fieldName="cipherKey"
      />
    </LayoutAnimationWrapper>
  );
}
