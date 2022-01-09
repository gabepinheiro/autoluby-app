/* eslint-disable no-undef */
import { getItem } from 'storage'
import { AuthResponseData } from 'contexts/user-auth'

const baseURL = process.env.REACT_APP_BASEURL

type Methods = 'GET' | 'POST'

export type ErrorResponseData = {
  error: boolean
  message: string
}

export type Params = {
  page?: number
}

export type Data<T> = {
  totalRecords: number
  records: T
}

const request = (url: string, options?: RequestInit) =>
  fetch(url, options)
    .then(async (response) => {
      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.message)
      }

      return response.json()
    })
    .catch(e => ({ error: true, message: e.message }))

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
export const getEmployees = get('/employees')
