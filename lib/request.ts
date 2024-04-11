import axios from "axios"

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
}

export const get = async (url: string)   => await axios.get(url, { headers })
export const post = async (url: string, body: any)   => await axios.post(url, body, {headers})
