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
    import Vue from 'vue'
    import router from '@/router'
    
    // import $ from 'jquery'

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
            },
            fetch (criteria = undefined) {
                const ENDPOINT = `${Vue.config.movues.ENDPOINTS.SEARCH}${criteria}`

                /*************************************************
                XMLHttprequest Asíncrona
                https://caniuse.com/#search=XMLHttpRequest
                ************************************************/
                // var req = new XMLHttpRequest()
                // /* El parámetro `true` indica que es asíncrona */
                // req.open('GET', ENDPOINT, true)
                // /* Observamos el estado de la petición */
                // req.onreadystatechange = function (aEvt) {
                //     /* Cuando la operación ha terminado */
                //     if (req.readyState === 4) {
                //         /* Y el resultado es satisfactorio */
                //         if (req.status === 200) {
                //             let foundMovies = JSON.parse(req.responseText)
                //             console.log(foundMovies.Search)
                //             this.movies = foundMovies.Search
                //         } else {
                //             console.log('Error loading page\n')
                //         }
                //     }
                // }.bind(this)
                // /* iniciamos la solicitud */
                // req.send(null)

                /*************************************************
                jQuery
                using jQuery as XMLHttpRequest wrapper

                NOTE >>> npm install jquery
                UNCOMMENT >>> import $ from 'jquery'
                ************************************************/
                // $.ajax({
                //     type: 'GET',
                //     url: ENDPOINT,
                //     /* El tipo de dato que esperamos recibir */
                //     dataType: 'json',
                //     success: function (response) {
                //         console.log(response.Search)
                //         this.movies = response.Search
                //     }.bind(this)
                // })

                /*************************************************
                Fetch()
                https://developers.google.com/web/updates/2015/03/introduction-to-fetch
                ************************************************/
                // fetch() allows you to make network requests similar to XMLHttpRequest (XHR). The main difference is that the Fetch API uses Promises, which enables a simpler and cleaner API, avoiding callback hell and having to remember the complex API of XMLHttpRequest.

                return window.fetch(ENDPOINT)
                    .then(response => response.json())
                    .then(json => {
                        const IS_OK = json.Response === 'True'

                        if (!IS_OK) {
                            throw new Error(json.Error)
                        }

                        this.movies = json.Search
                    })
                    .catch(err => {
                        this.error = err.message
                        throw err.message
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
