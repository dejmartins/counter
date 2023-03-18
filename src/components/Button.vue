<template>
    <div>
        <p>{{ title }}</p>
        <button @click="onClick"></button>
    </div>
</template>

<script>
export default {
    name: "Button",
    props: ["title"]
}
</script>

<style scoped>
button {
    border-radius: 5px;
    border: 1.5px solid green;
    height: 100px;
    width: 100px;
    cursor: pointer;
}

button:active{
    background-color: rgb(245, 252, 245);
}

p {
    text-align: center;
    font-weight: bold;
}
</style>