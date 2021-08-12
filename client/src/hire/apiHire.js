export const create = (userId, token, hire) => {
  return fetch(`${process.env.REACT_APP_API_URL}/hire/new/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    },
      body: hire
  })
      .then(response => {
        return response.json()
      })
      .catch(err => console.log(err))
}

// with pagination
export const list = page => {
  return fetch(`${process.env.REACT_APP_API_URL}/hires/?page=${page}`, {
    method: "GET"
  })
    .then(response => {
      return response.json()
    })
    .catch(err => console.log(err))
}

export const singleHire = hireId => {
  return fetch(`${process.env.REACT_APP_API_URL}/hire/${hireId}`, {
    method: "GET"
  })
    .then(response => {
      return response.json()
    })
    .catch(err => console.log(err))
}

export const listByUser = (userId, token) => {
  return fetch(`${process.env.REACT_APP_API_URL}/hires/by/${userId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  })
    .then(response => {
      return response.json()
    })
    .catch(err => console.log(err))
}

export const remove = (hireId, token) => {
  return fetch(`${process.env.REACT_APP_API_URL}/hire/${hireId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  })
    .then(response => {
      return response.json()
    })
    .catch(err => console.log(err))
}

export const update = (hireId, token, hire) => {
  console.log(hireId, token, hire);
  return fetch(`${process.env.REACT_APP_API_URL}/hire/${hireId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`
      },
      body: hire
  })
    .then(response => {
      return response.json()
    })
    .catch(err => console.log(err))
}

export const like = (userId, token, hireId) => {
  return fetch(`${process.env.REACT_APP_API_URL}/hire/like`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ userId, hireId })
  })
    .then(response => {
      return response.json()
    })
    .catch(err => console.log(err))
}

export const unlike = (userId, token, hireId) => {
  return fetch(`${process.env.REACT_APP_API_URL}/hire/unlike`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ userId, hireId })
  })
    .then(response => {
      return response.json()
    })
    .catch(err => console.log(err))
}

export const comment = (userId, token, hireId, comment) => {
  return fetch(`${process.env.REACT_APP_API_URL}/hire/comment`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ userId, hireId, comment })
  })
    .then(response => {
      return response.json()
    })
    .catch(err => console.log(err))
}

export const uncomment = (userId, token, hireId, comment) => {
  return fetch(`${process.env.REACT_APP_API_URL}/hire/uncomment`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ userId, hireId, comment })
  })
    .then(response => {
      return response.json()
    })
    .catch(err => console.log(err))
}