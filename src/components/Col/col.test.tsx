import { render, screen } from '@testing-library/react';
import Col from './col';

describe('Col', () => {
  it('should work normaly', () => {
    render(<Col data-testid='col' />);
    const c = screen.getByTestId('col');
    expect(c).toBeInTheDocument();
  });

  it('should work with fullfill prop', () => {
    render(<Col data-testid='col' fullfill />);
    const c = screen.getByTestId('col');
    expect(c).toBeInTheDocument();
    expect(c.classList.toString()).contains('fullfill');
  });

  it('should work normaly with props', () => {
    render(
      <Col
        data-testid='col'
        tag='form'
        className='col-teste'
        xs={1}
        sm={2}
        md={3}
        lg={4}
        xl={5}
      />
    );
    const c = screen.getByTestId('col');
    expect(c).toBeInTheDocument();
    expect(c).toBeInstanceOf(HTMLFormElement);
    expect(c).toHaveClass('col-teste');
    expect(c.classList.toString()).contain('col-xs-1');
    expect(c.classList.toString()).contain('col-sm-2');
    expect(c.classList.toString()).contain('col-md-3');
    expect(c.classList.toString()).contain('col-lg-4');
    expect(c.classList.toString()).contain('col-xl-5');
  });
});
