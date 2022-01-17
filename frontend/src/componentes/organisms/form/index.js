import { useState } from 'react'
import { Link } from 'react-router-dom'
import { requestToAPI } from '../../../services'
import { Button, CardShadow } from '../../atoms'
import { InputDefault, InputRadio } from '../../molecules'
import { Styles, Body, Footer } from './styles'

export const Form = ({ request, fields, link, callback }) => {
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const { method, context, endpoint, data } = request
    const response = await requestToAPI(
      {
        method,
        context,
        endpoint,
        data,
      },
      setLoading,
    )

    callback(response)
  }

  return (
    <Styles className="form" onSubmit={handleSubmit}>
      <CardShadow>
        <Body className="body">
          {(fields || []).map((field, index) => {
            const { id, name, label, type, required, onChange, value, group } =
              field

            switch (type) {
              case 'radio':
                return (
                  <InputRadio
                    key={`input-radio-${index}`}
                    {...{ id, name, label, onChange, group }}
                  />
                )
              default:
                return (
                  <InputDefault
                    key={`input-default-${index}`}
                    {...{ id, label, type, required, onChange, value }}
                  />
                )
            }
          })}
        </Body>
        <Footer className="footer">
          {link && <Link to={link.to}>{link.text}</Link>}
          <Button type="submit" disabled={loading} {...{ loading }}>
            Enviar
          </Button>
        </Footer>
      </CardShadow>
    </Styles>
  )
}
