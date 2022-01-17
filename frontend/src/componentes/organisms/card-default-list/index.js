import { CardDefault } from '../../molecules'
import { Styles, Row, Col } from './styles'

export const CardDefaultList = ({ items }) => {
  return (
    <Styles className="card-default-list">
      <Row className="row">
        {(items || []).map((item, index) => {
          return (
            <Col className="col" key={`card-default-list-${index}`}>
              <CardDefault {...item} />
            </Col>
          )
        })}
      </Row>
    </Styles>
  )
}
