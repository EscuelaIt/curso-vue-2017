<template lang='pug' src='./MovieList.pug'></template>

<script>
    import { mapActions } from 'vuex'

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
            return this.fetch(this.criteria)
        },
        methods: {
            ...mapActions([
                'latestSearches'
            ]),
            fetch (criteria = undefined) {
                console.log(this.$store)
                if (!criteria) {
                    this.films = undefined
                    this.loading = false
                    this.error = 'Error'

                    return false
                }

                this.loading = true

                this.latestSearches(criteria)
                    .then(films => {
                        this.films = films
                        this.loading = false
                    })
                    .catch(err => {
                        this.films = undefined
                        this.loading = false
                        this.error = err.message
                        throw err.message
                    })
            }
        }
    }
</script>

<style lang='css' src='./MovieList.css' scoped></style>
