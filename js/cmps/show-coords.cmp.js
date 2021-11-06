Vue.component('mouse-coords', {
    template: `
    <section class="mouse">      
    <div> mouse x is:{{x}} <br> mouse y is:{{y}}</div>
    </section>
    `,

    created(){
        document.addEventListener('mousemove', this.onMouseMove)
    },

    data() {
        return {
            x: 0,
            y: 0
        };
    },
    methods: {
        onMouseMove(ev){
            this.x = ev.clientX
            this.y = ev.clientY
        }
    },

});
