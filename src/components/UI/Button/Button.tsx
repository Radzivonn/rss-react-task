import React, { FC, ComponentProps } from 'react';
import './style.scss';

export const Button: FC<ComponentProps<'button'>> = ({
  children,
  ...props
}) => {
  return (
    <button {...props} type="button">
      {children}
    </button>
  );
};
