<template>
    <main role='main' class='movie-wrapper'>
        <h1>{{ title }}</h1>
        <movie v-bind:selected-movie='selectedMovie'></movie>
    </main>
</template>

<script>
    import Vue from 'vue'
    import Movie from '@/components/Movie/Movie'

    export default {
        name: 'app',
        components: {
            Movie
        },
        data () {
            return {
                title: 'Movues: find your tonight\'s plan',
                selectedMovie: {}
            }
        },
        mounted: function () {
            this.searchMovie(Vue.config.movues.FILM)
        },
        methods: {
            searchMovie (movie) {
                return window.fetch(`${Vue.config.movues.ENDPOINT}${movie}`)
                    .then(response => response.json())
                    .then(json => {
                        this.selectedMovie = json
                    })
            }
        }
    }
</script>

<style scoped>
    .movie-wrapper {
        height: 100vh;
        max-width: 800px;
        width: 90%;
        margin: 0 auto;
    }

    .movie-wrapper > h1 {
        font-weight: 300;
        text-align: center;
        margin: 0;
        padding: 2rem;
    }
</style>
