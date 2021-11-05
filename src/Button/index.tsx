import React, { FC } from 'react';
import styles from './style.module.scss';

export type ButtonType =
  | 'default'
  | 'primary'
  | 'info'
  | 'warning'
  | 'danger'
  | 'text';

export type ButtonSize = 'large' | 'default' | 'small';

interface ButtonProps {
  type?: ButtonType;
  size?: ButtonSize;
  className?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

export const getButtonStyle = (type: ButtonType) => {};

const Button: FC<ButtonProps> = ({
  type,
  size,
  className,
  icon,
  children,
  ...restProps
}) => {
  return <button>{children}</button>;
};

export default Button;
