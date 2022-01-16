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

export const CardDefault = ({ status, disabled, title, content, button }) => {

  return (
    <Styles>
      <Header>
        <Row>
          <Col>
            <H3>{title}</H3>
          </Col>
          <Col>
            <Bullet {...{ status }} />
          </Col>
        </Row>
      </Header>
      {content && <Body>
        <Strong>{content}</Strong>
      </Body>}
      {button && <Footer>
        <Button 
          type="button" 
          onClick={button.onClick} 
          disabled={button.disabled || disabled} 
          loading={button.loading} 
        >
          {button.text}
        </Button>
      </Footer>}
    </Styles>
  )
}