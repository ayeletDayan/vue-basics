Vue.component('user-preview', {
    props: ['user'],
    template: `
    <div class="user-preview">
    <img v-on:click="setTvShows" v-bind:src="user.img">    
    <h4 v-on:click="setNickname">{{user.name}}</h4>
    <div v-bind:class="getMode">{{showUserTv}}</div>
    </div>    
    `,

    data() {
        return {
            isShown: false,            
        }
    },
    
    methods: {  
        setNickname(){
            console.log('nickname');
            this.user.name = prompt('Set Nickname')
        },

        setTvShows(){
            console.log('TV');
            this.isShown = !this.isShown;            
        }

    },
    computed: {
        getMode() {
            return this.isShown ? 'show-tv' : 'hide-tv';
        },
        showUserTv(){
            return this.user.tvShows.join()
        }
    }
})