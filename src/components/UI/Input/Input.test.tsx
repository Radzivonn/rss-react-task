import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import { Input } from './Input';

describe('App test', () => {
  it('test', () => {
    render(<Input />);
    expect(screen.getByRole('input')).toBeInTheDocument();
  });
});
