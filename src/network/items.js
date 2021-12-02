import { request } from "./request"

export function getItemsData({ account, password }) {
    return request({
        url: "/gain",
        method: "POST",
        data: {
            type: 1,
            account: account,
            password: password
        }
    })
}