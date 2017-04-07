Vue.component('search', {
    template: " \
        <form \
            name='search' \
            v-on:submit.prevent='onSubmit' \
        > \
            <input \
                type='text' \
                name='search' \
                placeholder='Escribe una ciudad ...' \
                ref='criteria' \
                v-model='criteria' \
            /> \
            <input \
                type='submit' \
                name='send' \
                value='Buscar' \
            /> \
        </form> \
    ",
    data: function () {
        return {
            criteria: undefined
        }
    },
    methods: {
        onSubmit: function () {
            this.$emit('search', this.criteria)
        }
    },
    mounted: function () {
        this.$refs.criteria.focus();
    }
});
