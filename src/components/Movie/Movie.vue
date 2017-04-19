<template lang='pug' src='./Movie.pug'></template>

<script>
    /**
     * Component: Movie
     * Description: Show details from a film
    **/

    // Dependencies
    import mocks from '@/mocks.js'

    export default {
        name: 'Movie',
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
                this.movie = mocks.Film
            }
        }
    }
</script>

<style lang='css' src='./Movie.css' scoped></style>
