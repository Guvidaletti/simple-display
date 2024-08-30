import { Meta, StoryObj } from '@storybook/react/';
import Container from '../Container/container';
import Row from './row';

const meta: Meta<typeof Row> = {
  title: 'Display/Row',
  component: Row,
};

export default meta;

type Story = StoryObj<typeof Row>;

export const Example: Story = {
  args: { centralized: true },
  render: function Render(args) {
    return (
      <Container>
        <Row {...args} tag='form'>
          Centralized by args
        </Row>
        <Row>Teste</Row>
      </Container>
    );
  },
};
