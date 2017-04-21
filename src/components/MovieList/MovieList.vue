<template lang='pug' src='./MovieList.pug'></template>

<script>

    import Vue from 'vue'

    import $ from 'jquery'

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
                const ENDPOINT = `${Vue.config.movues.ENDPOINTS.SEARCH}${criteria}`
                this.loading = true

                $.ajax({
                    type: 'GET',
                    url: ENDPOINT,
                    dataType: 'json',
                    success: (json) => {
                        const IS_OK = json.Response === 'True'
                        if (!IS_OK) {
                            this.films = undefined
                            this.loading = false
                            this.error = json.Error
                            throw json.Error
                        }
                        this.films = json.Search
                        this.loading = false
                    }
                })

                // return window.fetch(ENDPOINT)
                //     .then(response => response.json())
                //     .then(json => {
                //         const IS_OK = json.Response === 'True'

                //         if (!IS_OK) {
                //             throw new Error(json.Error)
                //         }
                //         this.films = json.Search
                //         this.loading = false
                //     })
                //     .catch(err => {
                //         this.films = undefined
                //         this.loading = false
                //         this.error = err.message
                //         throw err.message
                //     })
            }
        }
    }
</script>

<style lang='css' src='./MovieList.css' scoped></style>
