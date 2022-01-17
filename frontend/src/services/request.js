import axios from 'axios'
import { toast } from 'react-toastify'

const API = 'http://localhost:8080/api/v1'

export const requestToAPI = async (config, setLoading) => {
  setLoading(true)
  const { method, context, endpoint, data } = config

  try {
    const request = axios({
      url: `${API}/${context}/${endpoint}`,
      method,
      data,
    })

    toast.promise(
      request,
      {
        pending: 'Aguardando resposta.',
        success: 'Tudo certo! 👌',
        error: 'Ops, algo deu errado. 🤯'
      }
    )

    const response = await request;

    setLoading(false)
    return {
      success: !!response?.data?.data,
      data: response?.data?.data,
    }
  } catch (error) {
    console.log(error)
  }

  setLoading(false)
  return {
    success: false,
  }
}
