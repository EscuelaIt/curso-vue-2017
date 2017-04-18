<template lang='html'>
    <div class='movues'>
        <header>
             <Logo></Logo>
             <!-- <component v-bind:is='currentView'></component> -->
        </header>
        <nav>
            <!-- <Search v-on:search='onSearch'></Search> -->
            <!-- <Search></Search> -->
        </nav>
        <aside>
            <History></History>
        </aside>
        <main role='main'>
            <!-- <MovieList
                films='esto es un dato estático'
            ></MovieList> -->
            <MovieList
                v-bind:films='movies'
            ></MovieList>
        </main>
    </div>
</template>

<script>
    // import bus from '@/busdata.js'

    import mocks from '@/mocks.js'

    import Logo from '@/components/Logo/Logo'
    import Search from '@/components/Search/Search'
    import History from '@/components/History/History'
    import MovieList from '@/components/MovieList/MovieList'

    export default {
        name: 'app',
        components: {
            Logo,
            Search,
            History,
            MovieList
        },
        data: function () {
            return {
                // currentView: 'Logo',
                movies: mocks.Search
            }
        },
        methods: {
            onSearch (criteria) {
                console.log('searching ...', criteria)
            }
        }
        // created () {
        //     console.log('created')
        //     bus.$on('search', function (data) {
        //         console.log('eins?', data)
        //     })
        // }
    }
</script>

<style lang='css'>
    @import './assets/css/reset';
    @import './assets/css/global';
</style>

<style scoped>
    @import './assets/css/colors';

    .movues {
        background-color: var(--color-iron-grey);
        color: var(--color-black);

        display: grid;
        height: 100vh;
        grid-template-areas:
            'header header'
            'nav nav'
            'aside main';
        grid-template-columns: 1fr 4fr;
        grid-template-rows: auto auto 1fr;

    }

    header {
        background-color: var(--color-eden);
        grid-area: header;
    }

    nav {
        background-color: var(--color-white);
        grid-area: nav;
    }

    aside {
        background-color: var(--color-white);
        grid-area: aside;
    }

    main {
        background: var(--color-iron-grey);
        grid-area: main;
    }
</style>
