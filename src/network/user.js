import { request } from "./request"

export function login({ account, password }) {
    return request({
        url: "/user",
        method: "POST",
        data: {
            type: 1,
            account: account,
            password: password
        }
    })
}

export function reg({ account, password }) {
    return request({
        url: "/user",
        method: "POST",
        data: {
            type: 2,
            account: account,
            password: password
        }
    })
}