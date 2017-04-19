<template lang='pug' src='./History.pug'></template>

<script>
    import mocks from '@/mocks.js'

    export default {
        name: 'History',
        data: function () {
            return {
                filmsWithNotes: mocks.Search
            }
        }
    }
</script>

<style lang='css' src='./History.css' scoped></style>
