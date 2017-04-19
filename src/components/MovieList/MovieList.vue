<template lang='pug' src='./MovieList.pug'></template>

<script>
    export default {
        name: 'MovieList',
        props: {
            films: {
                type: Array,
                default: undefined,
                required: false
            }
        }
    }
</script>

<style lang='css' src='./MovieList.css'></style>
