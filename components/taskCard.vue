<template>
  <v-card width="200px" height="100" class="mt-2">
    <v-card-title>
      {{ task.title }}
    </v-card-title>
    <v-card-subtitle>
      {{ task.descripiton }}
    </v-card-subtitle>

  </v-card>
</template>

<script  setup>
const { task } =  defineProps(['task'])
</script>

<style>

</style>