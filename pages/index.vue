<template>
 <v-row class="pa-4"  justify="start">
    <v-col v-for="task in tasks" :key="task._id" cols="auto">
      <NuxtLink :to="`/task/${task._id}`"><TaskCard  :task="task"/></NuxtLink> 
    </v-col>
  </v-row>
    
</template>

<script  setup>

const {data:tasks} = await useFetch('/api/alltask');

</script>

<style>

</style>