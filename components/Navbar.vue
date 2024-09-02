
 <template>
  <div>
    <v-app-bar color="blue">
      <v-app-bar-title>
       <NuxtLink to="/">Task Manager</NuxtLink> 
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <v-autocomplete v-if="$route.fullPath == '/'"
      density="compact"
      variant="outlined"
      menu-icon=""
      class="mb-3"
  label="Search For a Task"
  :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
>
<template v-slot:append-inner>
  <v-icon>
    mdi-magnify
  </v-icon>

</template>
</v-autocomplete>
     <NuxtLink to="/addtask"><v-btn text>Add Task</v-btn></NuxtLink>  
    </v-app-bar>
  </div>
</template>

<script setup>

</script>

<style scoped>

</style>


<script lang="ts" setup>

</script>
