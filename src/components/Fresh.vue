<script setup>
import { ref, watchEffect } from 'vue'
import ApiService from '../service/ApiService.js'
import CryptoRatesList from './CryptoRatesList.vue'
import AssetAllocationForm from "./AssetAllocationForm.vue"

const currency = ref('USD')
const rates = ref({})
const errorMessage = ref('')
const lastUpdate = ref('')

const updateRates = async () => {
  errorMessage.value = ''
  return ApiService.getCryptoRates(currency.value)
      .then((data) => {
        rates.value = data
        lastUpdate.value = new Date()
      })
      .catch((err) => {
        errorMessage.value = err.message
      })
}

watchEffect(async () => {
  errorMessage.value = ''
  await updateRates()
})
</script>

<template>
  <main class="flex flex-col justify-between bg-gray-50">
    <div class="flex justify-center p-3 flex-col-reverse h-full gap-12">
      <!-- TODO: Style CryptoRatesList -->
      <div id="crypto-rates-container" class="flex flex-col self-center gap-8 max-w-md">
        <CryptoRatesList :currency="currency" :rates="rates" />
      </div>
      <div id="asset-allocation-container" class="flex flex-col self-center w-full overflow-hidden">
        <AssetAllocationForm @update-rates="updateRates" :currency="currency" :errorMessage="errorMessage" :lastUpdate="lastUpdate" :rates="rates" />
      </div>
    </div>
  </main>
</template>

<style scoped>
</style>