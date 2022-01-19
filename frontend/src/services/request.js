import axios from 'axios'
import { toast } from 'react-toastify'

const API = 'http://localhost:8080/api/v1'

export const requestToAPI = async (
  config,
  setLoading,
  enableToastDefault = true,
) => {
  setLoading(true)
  const { method, context, endpoint, data } = config

  try {
    const request = axios({
      url: `${API}/${context}/${endpoint}`,
      method,
      data,
    })

    if (enableToastDefault) {
      toast.promise(request, {
        pending: 'Aguardando resposta.',
        success: 'Tudo certo! 👌',
        error: 'Ops, algo deu errado. 🤯',
      })
    }

    const response = await request

    setLoading(false)
    return {
      success: !!response?.data?.data,
      data: response?.data?.data,
    }
  } catch (error) {
    const { statusCode } = error?.response?.data

    if (statusCode) {
      const message = error?.response?.data?.message

      if (Array.isArray(message)) {
        message.forEach((err) => {
          toast.error(err)
        })
      } else {
        toast.error(message)
      }
    } else {
      toast.error("Ops, algo deu errado.")
    }
  }

  setLoading(false)
}
