import axios from "axios"

const poolApi = axios.create({
    timeout: 20000
});


poolApi.interceptors.request.use(
    (request) => {
        console.log(request)
        return request;
    },
    (error) => {
        console.log(error)
        throw error
    }
);

poolApi.interceptors.response.use(
    (response) => {
        console.log(response)
       return response
    },
    (error) => {
        console.log(error)
        throw error
    }
);

export function getInformation() {

   
    return poolApi.get("")
}