import React, { FC, ComponentProps } from 'react';

export const Input: FC<ComponentProps<'input'>> = ({ ...props }) => {
  return <input {...props} autoComplete="on" role="input" />;
};
