import './user-preview.cmp.js'

Vue.component('who-watch', {
    template: `<section class="user-list">                
                    <div class="user" v-for="(currUser, idx) in users">
                    <user-preview v-bind:user="currUser"></user-preview>
                        <button class="remove" v-on:click="removeUser(currUser.id)">x</button>
                    </div>                
                    <button class="add" v-on:click="addUser">Add User</button>
                </section>
                <div class="tv-shows"
                `,
    data() {
        return {
            users: [{ id: 'p101', name: 'Shuki' , img: 'img/1.jpg', tvShows: ['tv1', 'tv2']}, { id: 'p102', name: 'Puki' , img: 'img/2.jpg', tvShows: ['tv5', 'tv7'] }, { id: 'p103', name: 'Muki' , img: 'img/3.jpg', tvShows: ['tv1', 'tv5']}],
        }
    },
    methods: {
        removeUser(userId) {
            const idx = this.users.findIndex(p => p.id === userId)
            this.users.splice(idx, 1)
        },
        addUser() {
            const num = Date.now() % 1000
            this.users.push({ id: 'p' + num, name: `User ${num}`, img: 'img/logo.png', tvShows:[]})
        }

    }
})