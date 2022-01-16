import {
  Bullet,
  Button,
  H3,
  Strong } from '../../atoms';
import { 
  Styles,
  Row,
  Col, 
  Header,
  Body,
  Footer } from './styles';

export const CardDefault = ({ title, status, content, action }) => {

  return (
    <Styles>
      <Header>
        <Row>
          <Col>
            <H3>{title}</H3>
          </Col>
          <Col>
            <Bullet 
              status={status} />
          </Col>
        </Row>
      </Header>
      {content && <Body>
        <Strong>{content}</Strong>
      </Body>}
      <Footer>
        <Button 
          type={action.type} 
          onClick={action.onClick} 
          disabled={action.disabled} 
          loading={action.loading} 
        >
          {action.text}
        </Button>
      </Footer>
    </Styles>
  )
}