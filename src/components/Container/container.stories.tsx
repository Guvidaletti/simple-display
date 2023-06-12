import Col from '../Col/col';
import Row from '../Row/Row';
import Container, { ContainerProps } from './container';

export default {
  title: 'Display/Container',
};

export const Example = (args: Partial<ContainerProps<'div'>>) => {
  return (
    <Container
      {...args}
      tag='form'
      onSubmit={(e) => {
        e.preventDefault();
        const fd = new FormData(e.target as HTMLFormElement);
        alert(fd.get('inp'));
      }}
      style={{ backgroundColor: '#cdcdcd' }}
      insiderProps={{ style: { backgroundColor: '#dddddd' } }}
    >
      <Row>
        <Col gap={2}>
          <input type='text' name='inp' />
          <button type='submit'>Teste aqui</button>
        </Col>
      </Row>
    </Container>
  );
};

Example.args = {
  fluid: false,
  padding: 1,
} as Partial<ContainerProps<'div'>>;
