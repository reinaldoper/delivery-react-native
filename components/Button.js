import React from 'react';
import { Button as PaperButton } from 'react-native-paper';
import styles from '../styles/style';

const ButtonProps = ({ children, ...props }) => {
  return (
    <PaperButton {...props} style={styles.buttonDelivery}>{children}</PaperButton>
  );
}

export default ButtonProps;