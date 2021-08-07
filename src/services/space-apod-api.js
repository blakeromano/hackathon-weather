const BASE_URL = '/api/space'

export function Apod(){
    console.log()
    console.log(JSON.stringify())
  return fetch(`${BASE_URL}/apod`, {
    method: 'GET',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify()
  }).then(res => res.json())
}


