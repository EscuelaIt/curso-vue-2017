<template lang='pug' src='./Movie.pug'></template>

<script>
    /**
     * Component: Movie
     * Description: Show details from a film
    **/

    // Dependencies
    import Vue from 'vue'

    // Components
    import Notes from '@/components/Notes/Notes'

    export default {
        name: 'Movie',
        components: {
            Notes
        },
        data () {
            return {
                movie: undefined
            }
        },
        props: {
            film: {
                type: String,
                default: undefined,
                required: true
            }
        },
        created () {
            this.fetchFilm()
        },
        methods: {
            fetchFilm () {
                const ENDPOINT = `${Vue.config.movues.ENDPOINTS.FILM}${this.film}`

                Vue.axios.get(ENDPOINT)
                    .then(response => {
                        this.movie = response.data
                    })
            }
        }
    }
</script>

<style lang='css' src='./Movie.css' scoped></style>
