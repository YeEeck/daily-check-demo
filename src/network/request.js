import axios from "axios";

export function request(config) {
    const instant = axios.create({
        baseURL: "https://e023c809-e7bf-479b-b0ec-ecf089c638f1.bspapp.com/http",
        headers: {
            'Content-Type': 'application/json'
        },
        timeout: 8000,
    });

    return instant(config);
}