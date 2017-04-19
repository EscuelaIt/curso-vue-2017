<template lang='pug'>
    div.movues
        header
             Logo
        nav
            Search(v-on:search='onSearch')
        aside
            History
        main(role='main')
            router-view(name='return')
            router-view
</template>

<script>
    /**
     * Component: App
     * Description: Base component that load router only
    **/

    // Dependencies
    import router from '@/router'

    // Components
    import Logo from '@/components/Logo/Logo'
    import Search from '@/components/Search/Search'
    import History from '@/components/History/History'

    export default {
        name: 'app',
        components: {
            Logo,
            Search,
            History
        },
        methods: {
            onSearch (criteria) {
                router.push({
                    name: 'movieList',
                    query: {
                        criteria
                    }
                })
            }
        }
    }
</script>

<style lang='css'>
    @import 'assets/css/reset';
    @import 'assets/css/global';
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

        padding: 2rem 4rem;
    }
</style>
