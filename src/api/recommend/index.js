import fetch from 'api/fetch'

export function newsong () {
  return fetch({
    url: '/personalized/newsong',
    method: 'post',
    data: {
      params: 'OhPJblo2D2kQ4K6KPX2lPZtHRwl0Plt18%2FVsbzn%2BXQ4%3D',
      encSecKey: '48c0c5bb65be9023347d98f8c9ce707955b03ff1b8d5266a5c50795169a6bda6b93656b7a6feb0dce2d5683e66a0cc498f67f32e75120632c4144de6fad1dac92def106a2896fbff507d560b197eaa8149c301c22f75bed388c107290a2287f3d9f68811060ca9272492b0f017b7214f989d781656a6a753f29326c1988955f4'
    }
  })
}
