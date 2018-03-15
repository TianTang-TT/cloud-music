
import fetch from './index'

export function login (email: string, pwd: string) {
    return fetch({
        url: '/recommend/resource',
        params: {
            email, pwd
        }
    })
}