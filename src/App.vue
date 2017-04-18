<template lang='html'>
    <div class='movues'>
        <header>
             <Logo></Logo>
        </header>
        <nav>
            <Search></Search>
        </nav>
        <aside>
            <History></History> 
        </aside>
        <main role="main">
            <MovieList></MovieList>
        </main>          
    </div>
</template>

<script>
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
        }
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
            "header header"
            "nav nav"
            "aside main";
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
