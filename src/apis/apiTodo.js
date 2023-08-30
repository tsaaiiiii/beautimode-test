import { request } from '@/apis/request.js'

// 取得-get
const api_todoGet = () => {
  return request.get()
}
// 新增-post
const api_todoPost = (content) => {
  return request.post(import.meta.env.VITE_API_URL, { content })
}
// 刪除-delete
const api_todoDelete = (id) => {
  return request.delete(`${id}`)
}
// 切換-patch
const api_todoPatch = (id) => {
  return request.patch(`${id}`)
}

export { api_todoGet, api_todoPost, api_todoDelete, api_todoPatch }
