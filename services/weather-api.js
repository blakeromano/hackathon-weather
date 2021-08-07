const BASE_URL = '/api/weather'

export function generalWeather(city){
  return fetch(BASE_URL, {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(city)
  }).then(res => res.json())
}