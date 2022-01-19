import { Logo } from '../../atoms'
import { Form } from '../../organisms'
import { Styles, Header, Body } from './styles'

export const SignUp = ({ request, fields, link, callback }) => {

  return (
    <Styles className="sign-up">
      <Header>
        <Logo color="primary" />
      </Header>
      <Body>
        <Form
          {...{ request, fields, link, callback }}
        />
      </Body>
    </Styles>
  )
}
