<script setup>
import { RouterView } from 'vue-router'
import MenuLateral from '@/components/layout/MenuLateral.vue'
import DarkMode from '@/components/layout/DarkMode.vue'
import MigajasSuperior from '@/components/layout/MigajasSuperior.vue';

import { useTituloStore } from '@/stores/titulo.js';
const tituloStore = useTituloStore();

import { watchEffect } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
watchEffect(() => {
  tituloStore.texto = route.meta.title;
});
</script>

<template>
  <div class="grid min-h-screen min-h-auto dark:bg-gray-800 dark:text-white">
    <MenuLateral />

    <div class="ml-14 h-full">
      <!-- TODO Ver porque no está andando bien lo del ancho de la barra con el titulo -->

      <header
        class="pl-4 min-h-14 z-10 border-b-[1px] border-gray-200 w-lvw fixed flex items-end bg-gradient-to-b from-gray-200/80 to-gray-100/40 justify-between pr-20 dark:from-gray-800/80 dark:to-gray-800/40 dark:border-gray-700 pb-2 backdrop-blur-[2px]">
        <div class="grid grid-rows-2 gap-2">
          <MigajasSuperior class="mt-3" />
          <h1 class="text-xl font-semibold">
            {{ tituloStore.texto }}
          </h1>
        </div>
        <span>
          <!-- <DarkMode /> -->
        </span>
      </header>
      <main class="flex-grow mt-14 pt-7 px-4">
        <RouterView />
      </main>
    </div>
  </div>
</template>
