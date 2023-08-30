const api_todoGet = () => {
  return fetch(import.meta.env.VITE_API_URL, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
}

const api_todoPost = (content) => {
  return fetch(import.meta.env.VITE_API_URL, {
    method: 'POST',
    body: JSON.stringify(content),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
}

const api_todoDelete = (id) => {
  return fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
}

const api_todoPatch = (id) => {
  return fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
}

export { api_todoGet, api_todoPost, api_todoDelete, api_todoPatch }
