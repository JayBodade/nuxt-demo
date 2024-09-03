<template>
    <v-form ref="form">
        <v-text-field
          label="Title"
          v-model="title"
          :rules="rules"
          variant="outlined"
          class="px-2"
        ></v-text-field>

        <v-textarea
          label="Description"
          v-model="descripiton"
          :rules="rules"
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
    
 
</template>
<script>
export default {
  data() {
    return {
      rules: [
        v => !!v || 'This field is required',
      ],
      title: null,
      descripiton: null,
    }
  },
  methods: {
    async submitForm() {
      const data = {
        title: this.title,
        descripiton: this.descripiton,
      }

      const { valid } = await this.$refs.form.validate()

      if (!valid) return;


      try {
        const response = await fetch('/api/addtask', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        const result = await response.json();

        if (result.success) {
          this.title = null;
          this.descripiton = null;
          
        }

      } catch (e) {
        console.error("Something went wrong", e);
      }finally{
        this.$refs.form.resetValidation(); 
        this.$router.push('/');
      }
    }
  }
}
</script>


<style>

</style>