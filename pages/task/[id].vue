<template>
  <v-container class="pa-8 my-4">
    <v-row align="center" justify="center">
      <v-col cols="12" md="8" lg="6" class="text-center">
        <h1 class="title">{{ task?.title }}</h1>
        <p class="description">{{ task?.description }}</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { useFetch } from '#app';

const route = useRoute();
const { id } = route.params;
const { data: task } = useFetch(`/api/getTask?id=${id}`, {
  key: id,
});
</script>

<style scoped>
.title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a237e;
  margin-bottom: 16px;
}

.description {
  font-size: 1.25rem;
  color: #424242;
  line-height: 1.6;
}
</style>
