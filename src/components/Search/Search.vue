<template src="./Search.html"></template>

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
            }
        },
        filters: {
            capitalize: function (value) {
                if (!value) return ''
                value = value.toString()
                return value.charAt(0).toUpperCase() + value.slice(1)
            },
            invert: function (value) {
                if (!value) return ''
                value = value.toString()
                return value.split('').reverse().join('')
            }
        }
    }
</script>

<style scoped src="./Search.css"></style>
