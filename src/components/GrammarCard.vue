<template>
    <div class="q-pa-md row items-start q-gutter-md">
      <q-card class="grammar-card" flat bordered>
        <q-card-section class="q-pt-xs">
          <div class="text-overline">Overline</div>
          <div class="text-h5 q-mt-sm q-mb-xs">{{ title }}</div>
          <div class="q-pa-md">
                {{ description }}
            </div>
          </q-card-section>
  
        <q-separator />

        <q-card-section>
            <ul>
                <li v-for="example in examples" :key="example.example">
                    <strong>{{ example.example }}</strong> - {{ example.translation }}
                </li>
            </ul>
        </q-card-section>
  
        <q-card-actions class="row justify-evenly">
          <q-btn flat>
            Previous
          </q-btn>
          <q-btn flat color="primary">
            Next
          </q-btn>
        </q-card-actions>
      </q-card>
  
    </div>
</template>

<script setup lang="ts">

interface Props {
    title: string;
    description: string;
    examples: Example[];
};

type Example = {
    example: string;
    translation: string;
};

// Define props without defaults to make them required
defineProps<Props>()
</script>

<style>
.grammar-card {
  max-width: 750px;
}
</style>
  