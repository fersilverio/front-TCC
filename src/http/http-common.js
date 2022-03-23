import axios from 'axios'

export default axios.create({
    baseURL: "http://fsilverio10.pythonanywhere.com/",
    headers: {
        "Content-type": "application/json"
    }
})