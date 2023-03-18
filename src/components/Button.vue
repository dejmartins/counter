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
    margin: 0 5px 0 5px;
}

button:active{
    background-color: rgb(245, 252, 245);
}

p {
    text-align: center;
    font-weight: bold;
}

@media (max-width: 600px){
    .p {
        text-align: center;
    }
}
</style>