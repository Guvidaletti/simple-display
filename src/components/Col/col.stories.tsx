import { HTMLAttributes } from 'react';
import Container from '../Container/container';
import Row from '../Row/Row';
import Col, { ColProps } from './col';

export default {
  title: 'Display/Col',
};

interface ItemProps extends HTMLAttributes<HTMLDivElement> {
  backgroundColor?: string;
}

const Item = ({ children, backgroundColor }: ItemProps) => {
  return (
    <div
      style={{
        width: '100%',
        padding: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 1px 5px rgba(0, 0, 0, 0.3)',
        borderRadius: '4px',
        textAlign: 'center',
        backgroundColor,
      }}
    >
      {children}
    </div>
  );
};

export const FirstExample = () => {
  return (
    <Container>
      <Row>
        <Col xs={6} lg={4}>
          <Item backgroundColor='#efefef'>
            xs={6} lg={4}
          </Item>
        </Col>
        <Col xs={6} lg={8}>
          <Item backgroundColor='#dfdfdf'>
            xs={6} lg={8}
          </Item>
        </Col>
        <Col xs={12}>
          <Item backgroundColor='#fed9fe'>xs={12}</Item>
        </Col>
        <Col xs={5} sm={4}>
          <Item backgroundColor='#f0fff0'>
            xs={5} sm={4}
          </Item>
        </Col>
        <Col xs={7} sm={8}>
          <Item backgroundColor='#ddffdd'>
            xs={7} sm={8}
          </Item>
        </Col>
        <Col sm={5} md={4} lg={3} xl={2}>
          <Item backgroundColor='#efddef'>
            sm={5} md={4} lg={3} xl={2}
          </Item>
        </Col>
        <Col sm={3} md={3} lg={4} xl={6}>
          <Item backgroundColor='#efccef'>
            sm={3} md={3} lg={4} xl={6}
          </Item>
        </Col>
        <Col sm={4} md={5} lg={5} xl={4}>
          <Item backgroundColor='#efaaef'>
            sm={4} md={5} lg={5} xl={4}
          </Item>
        </Col>
        <Col md={6} xl={4}>
          <Item backgroundColor='#f0fff0'>
            md={6} xl={4}
          </Item>
        </Col>
        <Col fullfill>
          <Item backgroundColor='#ddffdd'>fullfill</Item>
        </Col>
        <Col>
          <Item backgroundColor='#efefef'>infered={12}</Item>
        </Col>
      </Row>
    </Container>
  );
};

export const SecondExample = (args: ColProps<'div'>) => {
  return (
    <Container>
      <Row>
        <Col {...args}>
          <button>Teste</button>
          <button>Teste 2</button>
          <button>Teste 3</button>
        </Col>
      </Row>
    </Container>
  );
};

SecondExample.args = {
  gap: 1,
  xs: 12,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 12,
  padding: 1,
} as ColProps<'div'>;
