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