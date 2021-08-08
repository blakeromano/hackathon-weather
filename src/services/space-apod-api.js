const BASE_URL = '/api/space'

export function Apod(){
  return fetch(`${BASE_URL}/apod`, {
    method: 'GET',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify()
  }).then(res => res.json())
}

export function randomApod(){
  return fetch(`${BASE_URL}/random-apod`, {
    method: 'GET',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify()
  }).then(res => res.json())
}