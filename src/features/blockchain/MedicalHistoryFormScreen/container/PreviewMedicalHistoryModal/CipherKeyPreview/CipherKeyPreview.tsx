import React from 'react';
import LayoutAnimationWrapper from 'UI/LayoutAnimationWrapper';
import KeyValuePairRow from 'UI/KeyValuePairRow';

type Props = {
  cipherKey: string
};
export default function CipherKeyPreview({ cipherKey }: Props) {
  return (
    <LayoutAnimationWrapper title="Security" expanded>
      <KeyValuePairRow label="Cipher Key" value={cipherKey} />
    </LayoutAnimationWrapper>
  );
}
