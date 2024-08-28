<script setup>
const props = defineProps(['currency', 'rates'])
</script>

<template>
  <section>
    <div class="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
      <span class="font-medium">Note</span>: I did not get to finish styling this component but wanted to leave it in as an example of what I would have considered including.
    </div>
    <h3>{{ currency }} to Crypto Rates</h3>
    <ul v-for="(value, key) in props.rates" :key="key" class="divide-y divide-gray-200 dark:divide-gray-700">
      <li class="pb-3 sm:pb-4">
        <div class="flex items-center space-x-4 rtl:space-x-reverse">
          <div class="flex-shrink-0">
            <!--        TODO: Fix and detect broken images    -->
<!--            <img v-if="'/img/crypto/' + String(key).toLowerCase() + '.svg'" :src="'/img/crypto/' + String(key).toLowerCase() + '.svg'" class="w-8 h-8 rounded-full" />-->
<!--            <img v-else src="@/assets/images/default.png" class="w-8 h-8 rounded-full" />-->
            <img class="w-8 h-8 rounded-full" :src="'/img/crypto/' + String(key).toLowerCase() + '.svg'" alt="{{ key }}">
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
              {{ key }}
            </p>
          </div>
          <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
            {{ value }}
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>