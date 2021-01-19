import React from 'react';
import Button from 'UI/Buttons';
import { ButtonProps } from 'UI/Buttons/Button';
import theme from 'theme';
import styles from '../button.style';

export default function BorderButton({ style = {}, ...rest }: ButtonProps) {
  return (
    <Button style={[styles.borderButton, style]} titleColor={theme.PRIMARY} {...rest} />
  );
}
