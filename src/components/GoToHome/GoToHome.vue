<template lang='pug'>
    router-link(
        v-bind:to='{ name: "movieList" }'
    ) ↩ Back To Movie List
</template>

<script>
    export default {
        name: 'Return'
    }
</script>

<style lang='css' scoped>
    @import '../../assets/css/colors';

    a {
        display: block;
        color: var(--color-kashmir-blue);
        font-weight: 800;
        padding: 1rem;

        &:hover {
            color: var(--color-eden);
        }
    }
</style>
