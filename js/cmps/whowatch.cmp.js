import './user-preview.cmp.js'

Vue.component('who-watch', {
    template: `<section class="user-list">                
                    <div v-for="(currUser, idx) in users">
                        <user-preview v-bind:user="currUser"></user-preview>
                        <button v-on:click="removeUser(currUser.id)">x</button>
                    </div>                
                    <button v-on:click="addUser">Add User</button>
                </section>        `,
    data() {
        return {
            users: [{ id: 'p101', name: 'Shuki' , img: 'img/1.jpg'}, { id: 'p102', name: 'Puki' , img: 'img/2.jpg'}, { id: 'p103', name: 'Muki' , img: 'img/3.jpg'}],
        }
    },
    methods: {
        removeUser(userId) {
            const idx = this.users.findIndex(p => p.id === userId)
            this.users.splice(idx, 1)
        },
        addUser() {
            const num = Date.now() % 1000
            this.users.push({ id: 'p' + num, name: `User ${num}` })
        }

    }
})