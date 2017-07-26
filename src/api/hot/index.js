import fetch from 'api/fetch'

export function getHotMusic () {
  return fetch({
    url: 'detail',
    method: 'post'
  })
}
