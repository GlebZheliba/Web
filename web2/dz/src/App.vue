<template>
  <div>
  <input type="number" v-model="number"/>
  <table-component :inputNumber="number"/>
</div>
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
