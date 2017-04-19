<template lang='pug' src='./Search.pug'></template>

<script>
    /**
     * Component: Search
     * Description: Write a criteria and search films related with it
    **/

    export default {
        name: 'Search',
        data () {
            return {
                criteria: undefined
            }
        },
        methods: {
            onSubmit () {
                this.$emit('search', this.criteria)
            },
            focus () {
                this.$refs.criteria.focus()
            }
        }
    }
</script>

<style lang='css' src='./Search.css' scoped></style>
