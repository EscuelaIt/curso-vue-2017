<template>
    <nav class='search'>
        <h3>Search</h3>
        <form name='search'>
            <input
                type='text'
                name='criteria'
                placeholder='Escribe una película ...'
            />
        </form>
        <p>Criterio de busqueda: {{ criteria }}</p>
        <!-- <p>Criterio computed: {{ computedProperty }}</p> -->
    </nav>
</template>

<script>
    export default {
        name: 'Search',
        data: function () {
            return {
                criteria: undefined
                // criteria: 'Ningún texto seleccionado'
            }
        },
        // computed: {
        //     computedProperty: function () {
        //         // get: function () {
        //         //     ....
        //         // },
        //         // set: function (newValue) {
        //         //     ...
        //         // }
        //         return this.criteria.split('').reverse().join('')
        //     }
        // },
        // watch: {
        //     criteria: function (val) {
        //         this.onWatch(val)
        //     }
        // },
        // mounted: function () {
        //     this.$el.querySelector('form').addEventListener('submit', function (evt) {
        //         evt.preventDefault()
        //         this.criteria = evt.currentTarget.querySelector('input').value
        //     })
        //     this.$el.querySelector('form').addEventListener('submit', this.onSubmit)
        // },
        // methods: {
        //     onSubmit: function (evt) {
        //         evt.preventDefault()
        //         this.criteria = evt.currentTarget.querySelector('input').value
        //     },
        //     onWatch: function(val) {
        //         console.log('watch', val)
        //     }
        // }
        beforeCreate: function () {
            console.log('beforeCreate:this', this)
            console.log('beforeCreate:$el', this.$el)
        },
        created: function () {
            console.log('created:this', this)
            console.log('created:$el', this.$el)
        },
        beforeMount: function () {
            console.log('beforeMount:this', this)
            console.log('beforeMount:$el', this.$el)
        },
        mounted: function () {
            console.log('mounted:this', this)
            console.log('mounted:$el', this.$el)
        },
        beforeUpdate: function () {
            console.log('beforeUpdate:this', this)
            console.log('beforeUpdate:$el', this.$el)
        },
        updated: function () {
            console.log('updated:this', this)
            console.log('updated:$el', this.$el)
        },
        beforeDestroy: function () {
            console.log('beforeDestroy:this', this)
            console.log('beforeDestroy:$el', this.$el)
        },
        destroyed: function () {
            console.log('destroyed:this', this)
            console.log('destroyed:$el', this.$el)
        }
    }
</script>

<style></style>
