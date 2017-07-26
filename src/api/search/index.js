import fetch from 'api/fetch'

export function searchSongs (keyword) {
  return fetch({
    url: '/search',
    method: 'get',
    params: {
      keyword
    }
  })
}

export function getHotKeys () {
  return fetch({
    url: '/hots',
    method: 'get'
  })
}
