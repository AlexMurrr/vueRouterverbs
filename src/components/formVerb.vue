<script setup>
import { ref,computed } from "vue";
import  buttonV from "./buttonV.vue";

let isTrueButton = ref(false);
</script>

<template>

  <div>
    <form @submit.prevent="submit">
      <label class="label"><strong>Translate:</strong></label> <br />

      
      
      

      <label class="label"><strong>Simple Past:</strong></label> <br />
     
      
      
      <label class="label"><strong> Simple Participle:</strong></label> <br/>      

      <buttonV
        v-if="isTrueButton"
        class="btn"
        type="submit"
        label="Start"
        @click="(isTrueButton = !isTrueButton)"
      />
      
      <buttonV
        v-else
        class="btn"
        type="submit"
        label="Check"
        @click="
          (isTrueButton = !isTrueButton)"
      />     
      
      
      <hr />    
    </form>
  </div>
</template>

<style scoped>
.label {
  color: #17173f;
}

</style>
