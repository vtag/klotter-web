const ROOT = 'http://52.78.227.198/'

function checkStatus(response) {
  return response.text()
}

function parseJSON(data) {
  if (!data) {
    return data
  } else {
    return JSON.parse(data)
  }
}

export function get(url) {

  url = ROOT + url
  return fetch(url)
    .then(checkStatus)
    .then(parseJSON)
}

export function post(url, data) {
  url = ROOT + url
  return fetch(url, {
    method: 'post',
    body: JSON.stringify(data)
  })
    .then(checkStatus)
    .then(parseJSON)
}
