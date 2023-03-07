<template>
    <h1>Counter</h1>
    <div>{{ count }}</div>
    <div>
        <button @click="increment">Increment</button>
        <button @click="decrement">Decrement</button>
        <button @click="reset">Reset</button>
    </div>
</template>

<script>
import Counter from '@/composables/counter';
export default {
    setup(){
        const { count, increment, decrement, reset, setValue} = Counter();
        return { count, increment, decrement, reset, setValue};
    }
};
</script>