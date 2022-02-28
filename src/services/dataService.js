import http from '../http/http-common'

class DataService {
    getProb(entrada){
        return http.post(entrada)
    }
}

export default new DataService()