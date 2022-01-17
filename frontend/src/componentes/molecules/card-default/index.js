import { Button, CardShadow, H3 } from '../../atoms'
import { Styles, Header, Body, Footer } from './styles'

export const CardDefault = ({ disabled, title, content, button }) => {
  return (
    <Styles className="card-default">
      <CardShadow>
        <Header className="header">
          <H3>{title}</H3>
        </Header>
        {content && <Body className="body">{content}</Body>}
        {button && (
          <Footer className="footer">
            <Button
              type="button"
              onClick={button.onClick}
              disabled={disabled}
              loading={button.loading}
            >
              {button.text}
            </Button>
          </Footer>
        )}
      </CardShadow>
    </Styles>
  )
}
