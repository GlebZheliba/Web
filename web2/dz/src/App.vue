<template>
  <input type="number" v-model="number"/>
  <table-component :inputNumber="number"/>
</template>

<script>
import tableComponent from "@/components/table"

export default {
  name: 'App',
 components:{
  tableComponent
 },
 data(){
    return{
      number:0,
    }
  }
}
</script>

<style>

</style>
