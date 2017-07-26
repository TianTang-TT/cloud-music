import fetch from 'api/fetch'

export function searchSongs () {
  return fetch({
    url: '/search',
    method: 'get'
  })
}

export function getHotKeys () {
  return fetch({
    url: '/hots',
    method: 'get'
  })
}
