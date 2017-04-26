<template lang='pug' src='./History.pug'></template>

<script>
    /**
     * Component: History
     * Description: List all films with notes!
    **/
    import { mapGetters } from 'vuex'

    export default {
        name: 'History',
        computed: {
            ...mapGetters([
                'latestSearches'
            ])
        }

    }
</script>

<style lang='css' src='./History.css' scoped></style>
