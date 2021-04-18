import React, { FC } from 'react';
import Overlay from '../Overlay';
import Card from '../../Card';
import styles from './overlayWithCard.styles';

type Props = {
  isOpen: boolean;
  children?: any;
  removePadding?: boolean;
  onClose?: () => void;
  height?: number | string;
  customCardStyle?: any;
};

const OverlayWithCard: FC<Props> = (props: Props) => (
  <Overlay
    isOpen={props.isOpen}
    animationType="slide"
    hardwareAccelerated
    onClose={props.onClose}
    onPressOutsideChildren={props.onClose}
  >
    <Card
      style={[
        styles.cardContainer,
        props.removePadding && { paddingLeft: 0, paddingRight: 0 },
        props.height && { height: props.height },
        props.customCardStyle || {},
      ]}
    >
      { props.children }
    </Card>
  </Overlay>
);

export default OverlayWithCard;
