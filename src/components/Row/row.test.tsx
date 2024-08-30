import { render, screen } from '@testing-library/react';
import Row from './row';

describe('Row', () => {
  it('should work normaly', () => {
    render(<Row data-testid='row' />);
    const r = screen.getByTestId('row');
    expect(r).toBeInTheDocument();
  });

  it('should work normaly with props', () => {
    render(<Row data-testid='row' tag='form' centralized />);
    const r = screen.getByTestId('row');
    expect(r).toBeInTheDocument();
    expect(r).toBeInstanceOf(HTMLFormElement);
  });
});
