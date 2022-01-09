import { getItem } from 'storage'
import { AuthResponseData } from 'contexts/user-auth'

type Methods = 'GET' | 'POST'

export type ErrorResponseData = {
  error: boolean
  message: string
}

const baseURL = process.env.REACT_APP_BASEURL

// eslint-disable-next-line no-undef
const request = (url: string, options?: RequestInit) =>
  fetch(url, options)
    .then(async (response) => {
      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.message)
      }

      return response.json()
    })

const createRequest = (method: Methods) =>
  async (route: string, data?: any) => {
    const auth = await getItem<AuthResponseData>('@autoluby:auth')

    return request(baseURL + route, {
      method,
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${auth?.token}`,
      },
      body: JSON.stringify(data),
    })
  }

const get = createRequest('GET')

type GetVehicles = (
  noPaginate: boolean,
  params: {
    page: number
  }
) => Promise<any>

export const getVehicles: GetVehicles = (noPaginate = false, params) => {
  const route = `/vehicles?${noPaginate
    ? 'noPaginate'
    : `page=${params.page}`}`

  return get(route)
}

export const post = createRequest('POST')
