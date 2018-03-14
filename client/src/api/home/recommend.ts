import fetch from '../index'

export function getRecommendList () {
    return fetch({
        url: '/recommend/resource'
    })
}