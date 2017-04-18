<template>
    <aside class='history'>
        <h3>History</h3>
        <ul>
            <li>History: {{ filmsWithNotes }}</li>
        </ul>
        <!-- <ul v-for='film in filmsWithNotes'>
            <li>History: {{ film.Title }}</li>
        </ul> -->
    </aside>
</template>

<script>
    // import mocks from '@/mocks.js'

    export default {
        name: 'History',
        data: function () {
            return {
                filmsWithNotes: 'Esto es un propiedad interna del componente'
                // filmsWithNotes: mocks.Search
            }
        }
    }
</script>

<style></style>
