<template >
    <div>
        <button @click="incrementValues"> Увеличить значение </button>
        <button @click="incrementValues"> поделить на 7 </button>
        <table>
            <tr>
                <th v-for="num in numbers" :key="num"> 
                    {{ num }}
                </th>
            </tr>
            <tr>
                <td v-for="num in numbers" :key="num"> 
                    {{ num * inputNumber }}
                </td>
            </tr>
        </table>
    </div>
</template>

<script>

export default {
    name: "table-component",
    data(){
        return{
            numbers: [1,2,3,4,5,6,7,8,9,10]
        }
    },

    props:{
        inputNumber: Number
    },

    methods: {
        incrementValues(){
           for (let i = 0; i < 10; i++) {
                this.$set(this.numbers, i, this.numbers[i] + 1);
            }
        }
        divideBySeven(){
           for (let i = 0; i < 10; i++) {
                this.$set(this.numbers, i, this.numbers[i] / 7);
            }
        }

    }
}
</script>

<style scoped> 
    th{
        width: 50px;
        height: 50px;
        border: 2px solid black;
    }
    td{
        width: 50px;
        height: 50px;
        border: 2px solid black;
    }
</style>