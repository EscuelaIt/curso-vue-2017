<template lang='pug' src='./MovieList.pug'></template>

<script>
    import mocks from '@/mocks.js'

    /**
     * Component: MovieList
     * Description: List all films based on search criteria
    **/

    export default {
        name: 'MovieList',
        data () {
            return {
                films: undefined,
                error: undefined,
                loading: false
            }
        },
        props: {
            criteria: {
                type: String,
                default: undefined,
                required: false
            }
        },
        watch: {
            criteria (newValue) {
                this.error = undefined
                this.fetch(newValue)
            }
        },
        created () {
            console.log('created')
            return this.fetch(this.criteria)
        },
        methods: {
            fetch (criteria = undefined) {
                this.films = mocks.Search
            }
        }
    }
</script>

<style lang='css' src='./MovieList.css' scoped></style>
