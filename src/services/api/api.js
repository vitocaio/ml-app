const baseURL = 'https://api.mercadolibre.com'

export const getProductById = (id) => {
  return load(`${baseURL}/items/${id}`)
}

export const getProductDescription = (id) => {
  return load(`${baseURL}/items/${id}/description`)
}

export const getProductByQuery = (query) => {
  return load(`${baseURL}/sites/MLA/search?q=${query}`)
}

const load = (url) => {
  return fetch(url)
    .then(response => {
      if (response.status !== 200) {
        return response.status
      } else {
        return response.json()
      }
    })
}

const serviceApi = {
  getProductById: getProductById,
  getProductDescription: getProductDescription,
  getProductByQuery: getProductByQuery
}

export default serviceApi