<template>
    <main role='main' class='movie-list'>
        <h3>Films</h3>
        <ul>
            <li v-for='film in films'>
                <article>
                    <p>{{ film.Title }}</p>
                </article>
            </li>
            <!-- <li v-for='film in newFilms'>
                <article>
                    <p>{{ film }}</p>
                </article>
            </li> -->
        </ul>
        <!-- <h3>Reverse</h3>
        <ul>
            <li v-for='rev in reverse'>
                <article>
                    <p>{{ rev.Title }}</p>
                </article>
            </li>
        </ul> -->
    </main>
</template>

<script>
    import mocks from '@/mocks.js'

    export default {
        name: 'MovieList',
        // data: function () {
        //     return {
        //         films: mocks.Search
        //     }
        // }
        data: function () {
            return {
                films: undefined,
                newFilms: undefined
            }
        },
        // computed: {
        //     reverse: function () {
        //         if (this.films) {
        //             const newArray = []
        //             this.films.forEach(item => newArray.unshift(item))
        //
        //             return newArray
        //         }
        //     }
        // },
        // watch: {
        //     films: function (val) {
        //         console.log('watcher')
        //         this.newFilms = val.map(item => `${item.Title} | ${item.Type}`)
        //     }
        // },
        created: function () {
            console.log('beforeCreate!!!!!')
            this.films = mocks.Search
        }
    }
</script>

<style></style>
