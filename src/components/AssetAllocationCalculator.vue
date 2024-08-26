<script setup>
import { ref, watchEffect } from 'vue'
import axios from 'axios'

const BASE_API_URL = `https://api.coinbase.com/v2/exchange-rates?currency=`

const currency = ref('USD')
const rates = ref({})
const errorMessage = ref('')
const errorInvestable = ref('')
const btcAllocation = ref(0)
const ethAllocation = ref(0)

const getRates = async () => {
  errorMessage.value = ''
  return await (await axios.get(BASE_API_URL + currency.value)).data.data.rates
}

const setAllocation = (event, investableVal = +event.target.value) => {
  try {
    errorInvestable.value = ''

    if (Number.isNaN()) throw new Error('Enter a valid number')
    if (investableVal <= 0) throw new Error('Value must be greater than 0')

    // format currency
    const btcRate = +rates.value.BTC
    const ethRate = +rates.value.ETH
    btcAllocation.value = investableVal * .7 * btcRate
    ethAllocation.value = investableVal * .3 * ethRate
  } catch (err) {
    errorInvestable.value = err.message
  }
}

watchEffect(async () => {
  getRates()
      .then((data) => {
        rates.value = data
      })
      .catch((err) => {
        errorMessage.value = err.message
      })
      // .finally(() => {
      // })
})
</script>

<template>
  <h1>Asset allocation calculator</h1>
  <p v-if="errorMessage" class="error">Error: {{ errorMessage }}</p>
  <section id="asset-calculator">
    <form @submit="setAllocation">
      <label for="investable">Investable assets</label>
      <input type="number" id="investable" @change="setAllocation" pattern="^\$\d{1,3}(,\d{3})*(\.\d+)?$" data-type="currency" placeholder="$1,000.00" />
      <span v-if="errorInvestable" class="error">{{ errorInvestable }}</span>

      <label for="btc-allocation">70% BTC allocation</label>
      <input id="btc-allocation" :value="btcAllocation" readonly />

      <label for="eth-allocation">30% ETH allocation</label>
      <input id="eth-allocation" :value="ethAllocation" readonly />
    </form>
  </section>
  <section>
    <h3>{{currency}} Rates Available</h3>
    <ol v-if="Object.keys(rates).length > 0">
      <li v-for="(value, key) in rates" :key="key">
        <strong>{{ key }}</strong> {{ value }}
      </li>
    </ol>
  </section>
</template>

<style scoped>
</style>
