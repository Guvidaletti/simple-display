import { Meta, StoryObj } from '@storybook/react';
import Col from '../Col/col';
import Row from '../Row/row';
import Container from './container';

const meta: Meta<typeof Container> = {
  title: 'Display/Container',
  component: Container,
};

export default meta;

type Story = StoryObj<typeof Container>;

export const Example: Story = {
  args: { fluid: false, padding: 1 },
  render: function Render(args) {
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
  },
};
