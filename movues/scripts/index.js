Vue.component('movie', {
    template: '#single-movie',
    props: ['selectedMovie']
});

var vm = new Vue({
    el: '#root',
    data: {
        title: 'Movues: find your tonight\'s plan',
        selectedMovie: {}
    },
    mounted: function () {
        this.searchMovie('indiana');
    },
    methods: {
        searchMovie: function(movie) {
            fetch('http://www.omdbapi.com/?t=' + movie).then(function(response) {
                return response.json();
            }).then(function(json) {
                this.selectedMovie = json;
            }.bind(this));
        }
    }
});
