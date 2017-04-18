<template lang='pug' src="./MovieList.pug"></template>

<script>
    import mocks from '@/mocks.js'

    export default {
        name: 'MovieList',
        data () {
            return {
                films: mocks.Search
            }
        }
    }
</script>

<style lang='scss' src="./MovieList.scss"></style>
