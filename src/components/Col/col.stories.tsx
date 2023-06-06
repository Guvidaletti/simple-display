import Container from '../Container/container';
import Row from '../Row/Row';
import Col, { ColProps } from './col';

export default {
  title: 'Display/Col',
};

export const First = (args: ColProps<'div'>) => {
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

First.args = {
  gap: 1,
  xs: 12,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 12,
  padding: 1,
} as ColProps<'div'>;

export const AllCols = () => {
  return (
    <Container>
      <Row>
        <Col xs={6} lg={4} style={{ backgroundColor: '#efefef' }}>
          [6, 6*, 6*, 4, 4*]
        </Col>
        <Col xs={6} lg={8} style={{ backgroundColor: '#dfdfdf' }}>
          [6, 6*, 6*, 8, 8*]
        </Col>
        <Col xs={12} style={{ backgroundColor: '#d0d0d0' }}>
          [12, 12*, 12*, 12*, 12*]
        </Col>
        <Col xs={5} sm={4} style={{ backgroundColor: '#efefef' }}>
          [5, 4, 4*, 4*, 4*]
        </Col>
        <Col xs={7} sm={8} style={{ backgroundColor: '#dfdfdf' }}>
          [7, 8, 8*, 8*, 8*]
        </Col>
        <Col sm={5} md={4} lg={3} xl={2} style={{ backgroundColor: '#efddef' }}>
          [12*, 5, 4, 3, 2]
        </Col>
        <Col sm={3} md={3} lg={4} xl={6} style={{ backgroundColor: '#efccef' }}>
          [12*, 3, 3, 4, 6]
        </Col>
        <Col style={{ backgroundColor: '#efaaef' }} sm={4} md={5} lg={5} xl={4}>
          [12*, 4, 5, 5, 4]
        </Col>
        <Col style={{ backgroundColor: '#f0fff0' }} md={6} xl={4}>
          [12*, 12*, 6, 6*, 4]
        </Col>
        <Col fullfill style={{ backgroundColor: '#ddffdd' }}>
          fullfill
        </Col>
        <Col style={{ backgroundColor: '#ccfccc' }}>
          [12*, 12*, 12*, 12*, 12*]
        </Col>
      </Row>
    </Container>
  );
};
