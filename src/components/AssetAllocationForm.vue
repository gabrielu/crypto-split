<script setup>
const props = defineProps(['currency', 'errorMessage', 'lastUpdate', 'rates'])

import { ref, watchEffect } from 'vue'
import AssetsInput from "./AssetAllocationForm/AssetsInput.vue"
import CryptoInput from "./AssetAllocationForm/CryptoInput.vue"

const investable = ref(0)
const errorMessage = ref('')
const errorInvestable = ref('')
const btcAllocation = ref(0)
const ethAllocation = ref(0)

const setAllocation = (investableVal) => {
  try {
    errorInvestable.value = ''

    if (Number.isNaN(investableVal)) throw new Error('Enter a valid number')
    if (investableVal <= 0) throw new Error('Value must be greater than 0')

    investable.value = investableVal
    const btcRate = +props.rates.BTC
    const ethRate = +props.rates.ETH
    btcAllocation.value = investableVal * .7 * btcRate
    ethAllocation.value = investableVal * .3 * ethRate
  } catch (err) {
    errorInvestable.value = err.message
  }
}
</script>

<template>
  <section>
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <h1 class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">Asset Allocation</h1>

      <div v-if="props.errorMessage" class="p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300" role="alert">
        <span class="font-medium">Oops!</span> Could not attain crypto rates due to: {{ props.errorMessage }}
      </div>

      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <form @submit="setAllocation" class="space-y-4 md:space-y-6" action="#">
            <p>Enter Investable Assets and allocations will be calculated automatically.</p>

            <label for="currency-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Investable Assets</label>
            <AssetsInput inputId="currency-input" @set-allocation="setAllocation" :currency="props.currency" :error="errorInvestable" />

            <hr class="h-2 my-8 bg-blue-200 border-0">

            <CryptoInput inputId="btc-allocation" coin="BTC" percent="70" :val="btcAllocation" />
            <CryptoInput inputId="eth-allocation" coin="ETH" percent="30" :val="ethAllocation" />

            <div class="flex justify-between items-center flex-col sm:flex-row space-y-2 sm:space-y-0">
              <p v-if="props.lastUpdate" class="text-sm text-gray-500 dark:text-gray-400">Last update: {{ props.lastUpdate.toLocaleString() }}</p>
              <button type="button" @click="$emit('updateRates')" class="text-sm text-blue-700 dark:text-blue-500 inline-flex items-center font-medium hover:underline">
                Refresh <svg class="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 1v5h-5M2 19v-5h5m10-4a8 8 0 0 1-14.947 3.97M1 10a8 8 0 0 1 14.947-3.97"/>
              </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>