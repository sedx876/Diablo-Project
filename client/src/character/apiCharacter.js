export const create = (userId, token, character) => {
  return fetch(`${process.env.REACT_APP_API_URL}/character/new/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    },
      body: character
  })
      .then(response => {
        return response.json()
      })
      .catch(err => console.log(err))
}

// with pagination
export const list = page => {
  return fetch(`${process.env.REACT_APP_API_URL}/characters/?page=${page}`, {
    method: "GET"
  })
    .then(response => {
      return response.json()
    })
    .catch(err => console.log(err))
}

export const singleCharacter = characterId => {
  return fetch(`${process.env.REACT_APP_API_URL}/character/${characterId}`, {
    method: "GET"
  })
    .then(response => {
      return response.json()
    })
    .catch(err => console.log(err))
}

export const listByUser = (userId, token) => {
  return fetch(`${process.env.REACT_APP_API_URL}/characters/by/${userId}`, {
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

export const remove = (characterId, token) => {
  return fetch(`${process.env.REACT_APP_API_URL}/character/${characterId}`, {
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

export const update = (characterId, token, character) => {
  console.log(characterId, token, character);
  return fetch(`${process.env.REACT_APP_API_URL}/character/${characterId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`
      },
      body: character
  })
    .then(response => {
      return response.json()
    })
    .catch(err => console.log(err))
}

export const like = (userId, token, characterId) => {
  return fetch(`${process.env.REACT_APP_API_URL}/character/like`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ userId, characterId })
  })
    .then(response => {
      return response.json()
    })
    .catch(err => console.log(err))
}

export const unlike = (userId, token, characterId) => {
  return fetch(`${process.env.REACT_APP_API_URL}/character/unlike`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ userId, characterId })
  })
    .then(response => {
      return response.json()
    })
    .catch(err => console.log(err))
}

export const comment = (userId, token, characterId, comment) => {
  return fetch(`${process.env.REACT_APP_API_URL}/character/comment`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ userId, characterId, comment })
  })
    .then(response => {
      return response.json()
    })
    .catch(err => console.log(err))
}

export const uncomment = (userId, token, characterId, comment) => {
  return fetch(`${process.env.REACT_APP_API_URL}/character/uncomment`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ userId, characterId, comment })
  })
    .then(response => {
      return response.json()
    })
    .catch(err => console.log(err))
}