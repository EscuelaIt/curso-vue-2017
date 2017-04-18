<template>
    <div class='movues'>
        <div class='layout'>
            <Logo></Logo>
            <Search></Search>
            <History></History>
            <MovieList></MovieList>
        </div>
    </div>
</template>

<script>
    import Logo from '@/components/Logo/Logo'
    import Search from '@/components/Search/Search'
    import History from '@/components/History/History'
    import MovieList from '@/components/MovieList/MovieList'

    // Vue.component('app', {
    //     components: {
    //         Logo,
    //         Search,
    //         History,
    //         MovieList
    //     }
    // })

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

<style></style>
