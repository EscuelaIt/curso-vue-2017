<template lang='pug' src='./Notes.pug'></template>

<script>
    import Vue from 'vue'

    import VueFire from 'vuefire'
    import firebase from 'firebase'
    Vue.use(VueFire)

    const db = firebase.initializeApp({
        databaseURL: process.env.FIREBASE
    }).database()

    export default {
        name: 'Notes',
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
        created () {
            this.$firebaseRefs.notes.child(
                this.filmId
            ).on('value', data => {
                this.notes = data.val() || []
            })
        },
        methods: {
            onSubmitNote () {
                console.log('submit note', this.myNote)

                this.$firebaseRefs.notes
                    .child(this.filmId)
                    .child(this.notes.length)
                    .set(this.myNote)

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
