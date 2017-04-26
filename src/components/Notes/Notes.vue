<template lang='pug' src='./Notes.pug'></template>

<script>
    /**
     * Component: Notes
     * Description: Save notes by film
    **/

    import Vue from 'vue'

    import VueFire from 'vuefire'
    import firebase from 'firebase'
    Vue.use(VueFire)

    const db = firebase.initializeApp({
        databaseURL: process.env.FIREBASE
    }).database()

    export default {
        name: 'Notes',
        /*
        Al iniciar firebase le pedimos que conecte con la tabla notes que hemos creado nosotros en firebase
        */
        firebase: {
            notes: db.ref('notes')
        },
        data () {
            return {
                myNote: undefined,
                notes: undefined
            }
        },
        props: {
            filmId: {
                type: String,
                required: true
            }
        },
        /*
        Por defecto firebase no nos permite más que conectarnos con la base de datos.
        Durante el created recibimos la prop this.filmID y le pedimos a firebase las notas relacionadas con ese ID
        */
        created () {
            this.$firebaseRefs.notes.child(
                this.filmId
            ).on('value', data => {
                this.notes = data.val() || []
            })
        },
        methods: {
            onSubmitNote () {
                // Save
                this.$firebaseRefs.notes
                    .child(this.filmId)
                    .child(this.notes.length)
                    .set(this.myNote)

                // On success
                this.myNote = undefined
                this.onFocus()
            },
            onFocus () {
                this.$refs.note.focus()
            }
        }
    }
</script>

<style lang='css' src='./Notes.css' scoped></style>
