import axios from 'axios'

const BASE_API_URL = `https://api.coinbase.com/v2`

export default {
    getCryptoRates: async (currencyCode) => {
            const API_URL = `${BASE_API_URL}/exchange-rates?currencyCode=${currencyCode}`
            return await (await axios.get(API_URL)).data.data.rates
    }
}