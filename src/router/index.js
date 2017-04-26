// Dependencies
import Vue from 'vue'
import Router from 'vue-router'
import RandomWords from '@/libs/RandomWords.js'

// Components
import App from '@/App'
import MovieList from '@/components/MovieList/MovieList'
import Movie from '@/components/Movie/Movie'
import GoToHome from '@/components/GoToHome/GoToHome'
import NotFound from '@/components/NotFound/NotFound'

Vue.use(Router)

export default new Router({
    // Remove the hash mode for router, and simulate a full URL
    mode: 'history',
    routes: [
        {
            path: '/',
            component: App,
            children: [
                {
                    path: '', // ?criteria=pelicula
                    name: 'movieList',
                    component: MovieList,
                    props: route => ({
                        criteria: route.query.criteria || RandomWords()
                    })
                },
                {
                    path: '/film/:film',
                    name: 'movie',
                    components: {
                        default: Movie,
                        return: GoToHome
                    },
                    props: {
                        default: true
                    }
                }
            ]
        },
        {
            path: '/not-found',
            name: '404',
            component: NotFound
        },
        {
            path: '*',
            redirect: { name: '404' }
        }
    ]
})
