import axios from "axios"
import { zapperFiApiKey, zapperFiUrl, zapperFiBalancesPath } from "../Constants";
import { LiquidityPool } from "../model/LiquidityPool";


const poolApi = axios.create({
    timeout: 10000,
    headers: {
        Authorization: `Basic ${zapperFiApiKey}`,
        Accept: "application/json"
    }
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

export function getBalanceForPool(pool: LiquidityPool) {
    return poolApi.get(`${zapperFiUrl}${zapperFiBalancesPath}`, { params: { "addresses[]": pool.address, "networks[]": "ethereum", bundled: false } })
}