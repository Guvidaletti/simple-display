import Container from '../Container/container';
import Row, { RowProps } from './Row';

export default {
  title: 'Display/Row',
};

export const Example = (args: RowProps<'div'>) => {
  return (
    <Container>
      <Row {...args} tag='form'>
        Centralized by args
      </Row>
      <Row>Teste</Row>
    </Container>
  );
};

Example.args = {
  centralized: true,
} as Partial<RowProps<'div'>>;
