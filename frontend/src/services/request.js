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
    const errors = error?.response?.data?.message ?? []

    if (errors.length) {
      if (typeof errors !== 'string') {
        errors.forEach((err) => {
          toast.error(err)
        })
      }
    } else {
      toast.error('Servidores indisponíveis. 🤯')
    }
  }

  setLoading(false)
}
