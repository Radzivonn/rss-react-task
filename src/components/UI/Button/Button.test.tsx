import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import { Button } from './Button';

describe('App test', () => {
  it('test', () => {
    render(<Button />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
