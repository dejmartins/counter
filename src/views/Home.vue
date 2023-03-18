<template>
    <div>
        <div>
            <h1>About Counter</h1>
            <p>A counter is a device which stores (and sometimes displays) the number of times a particular event or process has occurred, 
                often in relationship to a clock.
                 Counters are generally classified as either synchronous or asynchronous. 
                 In synchronous counters, all flip-flops share a common clock and change state at the same time. 
                 In asynchronous counters, each flip-flop has a unique clock, and the flip-flop states change at different times.</p>
                 <button>Reset</button>
                 <!-- <input /> -->
        </div>
        <div>
            <Button title="Increase" :onClick="increment"/>
            <p>{{ count }}</p>
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

        doubleCount(){
            return this.$store.getters.doubleCount
        }
    },

    methods: {
        increment(){
            this.$store.dispatch("increment")
        }
    }
};
</script>