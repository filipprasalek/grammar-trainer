<template>
  <q-page class="row items-center justify-evenly">
    <!-- <example-component
      title="Example component"
      active
      :todos="todos"
      :meta="meta"
    ></example-component> -->
    <grammar-card :title="title" :description="description" :examples="examples"></grammar-card>
  </q-page>
</template>

<script setup lang="ts">
// import { ref } from 'vue';
// import type { Todo, Meta } from 'components/models';
// import ExampleComponent from 'components/ExampleComponent.vue'
import GrammarCard from 'components/GrammarCard.vue'

const description = "The Pretérito Perfecto is used to describe actions that have been completed in the past but are still relevant to the present moment. It is formed with the auxiliary verb 'haber' (conjugated in the present tense) and the past participle of the main verb. This tense is commonly used in Spain to talk about recent events or experiences."
const title = "Pretérito Perfecto"
const examples = [
  {
    "example": "Yo he comido paella.",
    "translation": "I have eaten paella."
  },
  {
    "example": "Tú has estudiado mucho.",
    "translation": "You have studied a lot."
  },
  {
    "example": "Él/Ella ha viajado a México.",
    "translation": "He/She has traveled to Mexico."
  },
  {
    "example": "Nosotros/Nosotras hemos visto la película.",
    "translation": "We have watched the movie."
  },
  {
    "example": "Vosotros/Vosotras habéis terminado el proyecto.",
    "translation": "You all have finished the project."
  },
  {
    "example": "Ellos/Ellas han escrito una carta.",
    "translation": "They have written a letter."
  }
];

// const todos = ref<Todo[]>([
//   {
//     id: 1,
//     content: 'ct1'
//   },
//   {
//     id: 2,
//     content: 'ct2'
//   },
//   {
//     id: 3,
//     content: 'ct3'
//   },
//   {
//     id: 4,
//     content: 'ct4'
//   },
//   {
//     id: 5,
//     content: 'ct5'
//   }
// ]);

// const meta = ref<Meta>({
//   totalCount: 1200
// });
</script>