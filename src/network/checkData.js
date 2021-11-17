import { request } from "./request"

export function getTodayCheckData({ account, date }) {
    return request({
        url: "/check",
        method: "POST",
        data: {
            type: 1,
            account: account,
            date: date
        }
    })
}

export function setTodayCheckData({ account, date, times }) {
    return request({
        url: "/check",
        method: "POST",
        data: {
            type: 2,
            account: account,
            date: date,
            times: times
        }
    })
}