<template>
  <v-container class="pa-8" style="max-width: 800px;">
    <v-card flat="" class="pa-6">
      <v-card-title class="text-h5">Add Task</v-card-title>
     
      <v-form >
        <v-text-field
          label="Ttitle"
          v-model="title"
          :rules="nameRules"
        variant="outlined"  
          class="mb-4 px-2"
        ></v-text-field>

        <v-textarea
          label="Description"
          v-model="description"
          :rules="emailRules"
          variant="outlined"

          class="mb-4 px-2"
        ></v-textarea>


        <v-card-actions>
          <v-btn
        
          color="blue"
         class="mx-auto"
        @click="submitForm"
      >
        Add Task
      </v-btn>

        </v-card-actions>
       
      </v-form>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'

let title = ref('');
let description =  ref('');
const nameRules = [
  v => !!v || 'title is required',
  v => (v && v.length >= 3) || 'title must be at least 3 characters long',
]

const emailRules = [
v => !!v || 'description is required',
v => (v && v.length >= 3) || 'description must be at least 3 characters long',
]



const submitForm = async () => {
 const data = {
    title:title.value,
    descrpiton:description.value
  }

  console.log("this is data",data);

  const response = await fetch('/api/addtask',{
    method:'POST',
    headers:{
      'content-type':'application/json',
    },
    body:JSON.stringify(data)
  });


  const result = await response.json()
  
}
</script>

<style scoped>
/* Customize styles for the form */
</style>
