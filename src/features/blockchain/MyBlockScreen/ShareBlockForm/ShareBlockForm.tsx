import React from 'react';
import OverlayWithCard from 'UI/Overlay/OverlayWithCard';
import Header from 'UI/Header';

type Props = {
  isOpen: boolean;
  onClose: () => void
};
export default function ShareBlockForm(props: Props) {
  return (
    <OverlayWithCard isOpen={props.isOpen} removePadding onClose={props.onClose}>
      <Header
        title="Share"
        noBackButton
        isRightIcon
        onRightIconPress={props.onClose}
      />
    </OverlayWithCard>
  );
}
