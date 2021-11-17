import React, { FC } from 'react';
import styles from './style.module.scss';

export type ButtonType =
  | 'primary'
  | 'secondary'
  | 'warning'
  | 'danger'
  | 'text'
export type ButtonSize = 'large' | 'default' | 'small';

export interface ButtonProps {
  /**
   * @description  设置按钮类型
   * @description.en-US  set button Type
   * @default default
   */
  type?: 'primary' | 'warning' | 'danger' | 'text' | 'secondary';
  /**
   * @description 设置按钮尺寸
   * @default normal
   */
  size?: 'large' | 'normal' | 'small';
  className?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

const Button: FC<ButtonProps> = ({
  type = 'secondary',
  size = 'normal',
  className,
  children,
  ...restProps
}) => {
  /**
   *
   * @param type
   */
  const getButtonTypeStyle = (type: ButtonType) => {
    switch (type) {
      case 'primary':
        return styles.button_type__primary;
      case 'secondary':
        return styles.button_type__secondary;
      default:
        return styles.button_type__secondary;
    }
  };
  /**
   *
   * @param size
   */
  const getButtonSizeStyle = (size: ButtonSize) => {};

  return (
    <button
      className={getButtonTypeStyle(type) + (className ? ' ' + className : '')}
    >
      {children}
    </button>
  );
};

export default Button;
