<template lang='pug' src='./Search.pug'></template>

<script>
    export default {
        name: 'Search',
        data () {
            return {
                criteria: undefined
            }
        },
        methods: {
            onSubmit () {
                console.log('search', this.criteria)
                this.$emit('search', this.criteria)
            },
            focus () {
                this.$refs.criteria.focus()
            }
        }
    }
</script>

<style lang='css' src='./Search.css' scoped></style>
