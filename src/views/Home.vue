<template>
    <div class="outer-container">
        <div class="top-container">
            <h1>ABOUT <strong>COUNTER</strong></h1>
            <p>A counter is a device which stores (and sometimes displays) the number of times a particular event or process has occurred, 
                often in relationship to a clock.
                 Counters are generally classified as either synchronous or asynchronous. 
                 In synchronous counters, all flip-flops share a common clock and change state at the same time. 
                 In asynchronous counters, each flip-flop has a unique clock, and the flip-flop states change at different times.</p>
                 <div class="reset-container">
                     <button @click="reset" >Reset</button>
                     <input placeholder="23" type="number"/>
                 </div>
        </div>
        <div class="bottom-container">
            <p><strong>{{ count }}</strong></p>
            <Button title="Increase" :onClick="increment"/>
            <Button title="Decrease" :onClick="decrement"/>
        </div>
    </div>
</template>

<script>
import Button from "../components/Button.vue"
export default {
    components:{ 
        Button 
    },

    computed: {
        count(){
            return this.$store.state.count
        },
    },

    methods: {
        increment(){
            this.$store.dispatch("increment")
        },
        decrement(){
            this.$store.dispatch("decrement")
        },
        reset(){
            this.$store.dispatch("reset")
        },
    }
};
</script>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

strong{
    font-weight: bold;
    font-family: Oswald, sans-serif !important;
}

.top-container{
    color: black;
    width: 100%;
    padding: 20px;
}

.reset-container{
    margin-top: 12px;
    display: flex;
}

input {
    max-width: 10vw;
    padding-left: 6px;
    border-radius: 4px;
    border: 1px solid rgb(23, 32, 23);
}

input:focus {
    outline: none !important;
    border : 1.5px solid green !important;
    box-shadow : green !important;
}

.reset-container button{
    height: 30px;
    padding: 0px 17px 0px 17px;
    cursor: pointer;
    border: 1px solid black;
    border-radius: 4px;
    margin-right: 7px;
    background-color: rgb(245, 252, 245);
}

.bottom-container{
    width: 50vw;
    display: flex;
    justify-content: space-between;
    margin-top: 27px;
    padding-left: 20px;
}

p strong{
    font-size: 100px;
}

@media (max-width: 600px){
    .bottom-container {
        border: 0.5px solid rgb(131, 131, 131);
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        margin: auto;
        width: 50%;
        padding: 10px;
        align-items: center;
    }
}


</style>