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

export function setCoin({ account, password, coin }) {
    return request({
        url: "/user",
        method: "POST",
        data: {
            type: 3,
            account: account,
            password: password,
            coin: coin
        }
    })
}

export function addCheckDay({ account, password }) {
    return request({
        url: "/user",
        method: "POST",
        data: {
            type: 4,
            account: account,
            password: password
        }
    })
}