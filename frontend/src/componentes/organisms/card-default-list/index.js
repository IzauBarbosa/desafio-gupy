import { CardDefault } from '../../molecules';
import { 
  Styles, 
  Row, 
  Col } from './styles';

export const CardDefaultList = ({ items }) => {

  return (
    <Styles>
      <Row>
        {(items || []).map((item, index) => {
          return (
            <Col key={`card-default-list-${index}`}>
              <CardDefault {...item} />
            </Col>
          );
        })}
      </Row>
    </Styles>
  )
}