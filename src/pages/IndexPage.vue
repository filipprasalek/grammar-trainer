<template>
  <q-page class="row items-center justify-evenly">
    <grammar-card 
      :onNextClick="grammarStore.nextCard"
      :onPreviousClick="grammarStore.previousCard"
      :current-card="grammarStore.getCurrentCard"
    ></grammar-card>
  </q-page>
</template>

<script setup lang="ts">

import GrammarCard from 'components/GrammarCard.vue'
import { useGrammarStore } from '../stores/grammar'

const grammarStore = useGrammarStore()

</script>
