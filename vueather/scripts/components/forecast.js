Vue.component('forecast', {
    template: " \
        <div class='forecast'> \
            <ul> \
                <li v-for='day in forecast'> \
                    <img  \
                        v-bind:src='day.icon_url' \
                        v-bind:alt='day.conditions' \
                    /> \
                    <div  \
                        class='temperature' \
                    > \
                        <span>{{ day.high.celsius }}º</span> \
                        <span>{{ day.low.celsius }}º</span> \
                    </div> \
                    <span class='conditions'>{{ day.conditions }}</span> \
                    <div \
                        class='date' \
                    > \
                        <span>{{ day.date.day }}</span> \
                        <span>{{ day.date.monthname }}</span> \
                    </div> \
                    <span>{{ day.date.weekday }}</span> \
                </li> \
            </ul> \
        </div> \
    ",
    props: {
        forecast: {
            type: Array,
            required: true
        }
    }
});
