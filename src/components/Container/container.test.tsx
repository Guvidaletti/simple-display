import { render, screen } from '@testing-library/react';
import Container from './container';

describe('Container', () => {
  it('should render the component', () => {
    render(
      <Container
        className='test'
        data-testid='wrapper'
        insiderProps={{ 'data-testid': 'container' }}
      />
    );

    const el = screen.getByTestId('container');
    expect(el).toBeInTheDocument();
    expect(el).toHaveClass('test');
  });

  it('should render the component with different tag', () => {
    render(
      <Container tag='form' fluid className='test' data-testid='wrapper' />
    );

    const el = screen.getByTestId('wrapper');
    expect(el).toBeInTheDocument();
    expect(el).toBeInstanceOf(HTMLFormElement);
  });
});
