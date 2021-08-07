const BASE_URL = '/api/space'

export function search(query){
    console.log(query)
    console.log(JSON.stringify(query))
  return fetch(`${BASE_URL}/photos`, {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(query)
  }).then(res => res.json())
}


