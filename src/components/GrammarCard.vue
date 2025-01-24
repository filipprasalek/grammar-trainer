<template>
    <div class="q-pa-md row items-start q-gutter-md">
      <q-card class="grammar-card" flat bordered>
        <q-card-section class="q-pt-xs">
          <div class="text-overline">Overline</div>
          <div class="text-h5 q-mt-sm q-mb-xs">{{ currentCard.title }}</div>
          <div class="q-pa-md">
                {{ currentCard.description }}
            </div>
          </q-card-section>
  
        <q-separator />

        <q-card-section>
            <ul>
                <li v-for="example in currentCard.examples" :key="example.example">
                    <strong>{{ example.example }}</strong> - {{ example.translation }}
                </li>
            </ul>
        </q-card-section>
  
        <q-card-actions class="row justify-evenly">
          <q-btn flat @click="onPreviousClick">
            Previous
          </q-btn>
          <q-btn flat color="primary" @click="onNextClick">
            Next
          </q-btn>
        </q-card-actions>
      </q-card>
  
    </div>
</template>

<script setup lang="ts">
// TOOD: Fix types
import { GrammarCard } from 'src/stores/grammar';


interface Props {
    onNextClick: () => void;
    onPreviousClick: () => void;
    currentCard: GrammarCard;
};

// Define props without defaults to make them required
defineProps<Props>()
</script>

<style>
.grammar-card {
  max-width: 750px;
}
</style>
  