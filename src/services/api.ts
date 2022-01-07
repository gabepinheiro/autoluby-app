type Methods = 'POST'

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
    .catch(e => ({ error: true, message: e.message }))

const createRequest = (method: Methods) =>
  <T>(route: string, data: T, token?: string) =>
    request(baseURL + route, {
      method,
      headers: {
        'content-type': 'application/json',
        authorization: token ?? '',
      },
      body: JSON.stringify(data),
    })

export const get = request
export const post = createRequest('POST')
