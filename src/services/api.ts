/* eslint-disable no-undef */
import { getItem } from 'storage'
import { AuthResponseData } from 'contexts/user-auth'

type Methods = 'GET' | 'POST'

export type ErrorResponseData = {
  error: boolean
  message: string
}

const baseURL = process.env.REACT_APP_BASEURL

const request = (url: string, options?: RequestInit) =>
  fetch(url, options)
    .then(async (response) => {
      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.message)
      }

      return response.json()
    })

type Params = {
  page?: number
}

type CreateRequest = (method: Methods) => (route: string)
   => (data?: any, noPaginate?: boolean, params?: Params) => Promise<any>

const createRequest: CreateRequest = (method) => (route) =>
  async (data, noPaginate, params) => {
    const routeWithParams = `${route}?${noPaginate
    ? 'noPaginate'
    : `page=${params?.page}`}`

    const auth = await getItem<AuthResponseData>('@autoluby:auth')

    let options: RequestInit = {
      method,
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${auth?.token}`,
      },
    }

    if (method === 'POST') {
      options = {
        ...options,
        body: JSON.stringify(data),
      }
    }

    return request(baseURL + (method === 'POST' ? route : routeWithParams), {
      ...options,
    })
  }

const get = createRequest('GET')

export const post = createRequest('POST')

export const getLogin = post('/login')

export const getVehicles = get('/vehicles')
