<script setup>
import  buttonV from "./buttonV.vue";
</script>

<template>

  <div>
    <form @submit.prevent="submit">
      <label class="label"><strong>Translate:</strong></label> <br />

      
      
      

      <label class="label"><strong>Simple Past:</strong></label> <br />
     
      <inputV     
    
      />
      
      
      <label class="label"><strong> Simple Participle:</strong></label> <br/>

      

      <buttonV
        v-if="isTrue"
        class="btn"
        type="submit"
        label="Start"
        @click="(isTrue = !isTrue)"
      />
      
      <buttonV
        v-else
        class="btn"
        type="submit"
        label="Check"
        @click="
          (isTrue = !isTrue)"
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
