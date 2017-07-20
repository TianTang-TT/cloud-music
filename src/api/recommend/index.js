import fetch from 'api/fetch'

export function newsong () {
  return fetch({
    url: '/newsong',
    method: 'get'
  })
}
