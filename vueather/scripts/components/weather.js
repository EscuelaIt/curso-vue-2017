Vue.component('weather', {
    template: " \
        <div class='weather'> \
            <div v-if='!forecast'> \
                <search \
                    v-on:search='onsearch' \
                ></search> \
                <p v-if='error' class='error'>{{ error }}</p> \
            </div> \
            <div \
                v-else \
                class='info' \
            > \
                <h2 class='city'>{{ city }}</h2> \
                <h3 class='date'>{{ date }}</h3> \
                <forecast v-bind:forecast='forecast'></forecast> \
                <a \
                    href='' \
                    class='reset' \
                    v-on:click.prevent='reset' \
                > Buscar otra ciudad </a> \
            </div> \
        </div> \
    ",
    data: function () {
        return {
            date: undefined,
            forecast: undefined,
            city: undefined,
            error: undefined,
        }
    },
    props: {
        endpoint: {
            type: Object,
            required: true
        }
    },
    methods: {
        reset: function (city) {
            this.city = undefined;
            this.date = undefined;
            this.forecast = undefined;
            this.error = undefined;
        },
        onsearch: function (city) {
            this.error = undefined;
            this.city = city
            return axios.get(this.endpoint.route + city + this.endpoint.extension)
                .then(function (res) {
                    if (res.data.response.error) {
                        throw 'Inserte otra ciudad'
                    }

                    if (!res.data.forecast) {
                        var newEndpoint = this.endpoint.route +
                            'zmw:' + res.data.response.results[0].zmw +
                            this.endpoint.extension;

                        return axios.get(newEndpoint)
                            .then(function (res) {
                                return res.data.forecast;
                            })
                    }

                    return res.data.forecast;
                }.bind(this))
                .then(function (forecast) {
                    this.date = forecast.txt_forecast.date
                    this.forecast = forecast.simpleforecast.forecastday
                }.bind(this))
                .catch(function (err) {
                    this.error = err;
                    console.error(err);
                }.bind(this))
        }
    }
});
