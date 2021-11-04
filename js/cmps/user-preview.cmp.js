Vue.component('user-preview', {
    props: ['user'],
    template: `
    <section class="user-preview">
    <img v-bind:src="{{user.img}}"/>
    <h4>{{user.name}}</h4>
    </section>
    `,
    data() {
        return {
            // img: getImg()
        }
    },
    // Life cycle hooks
    created() {
        console.log('User Preview Created!');
    },    
    destroyed() {
        console.log('User Preview Destroyed!');
    },
      
    methods: {  
        // getImg(){
        //     return 'img/1.jpg';
        // },   

    }
})