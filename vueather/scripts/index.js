new Vue({
    el: '#vueather',
    data: {
        api: {
            route: 'http://api.wunderground.com/api/6a290a45d49a182e/forecast/lang:SP/q/SP/',
            extension: '.json',
        }
    }
});
