import axios from 'axios'

const api_todoGet = () => {
  return axios.get(import.meta.env.VITE_API_URL)
}

const api_todoPost = (content) => {
  return axios.post(import.meta.env.VITE_API_URL, { content })
}

const api_todoDelete = (id) => {
  return axios.delete(`${import.meta.env.VITE_API_URL}/${id}`)
}

const api_todoPatch = (id) => {
  return axios.patch(`${import.meta.env.VITE_API_URL}/${id}`)
}

export { api_todoGet, api_todoPost, api_todoDelete, api_todoPatch }
