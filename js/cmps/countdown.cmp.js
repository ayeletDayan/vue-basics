Vue.component('count-down', {
    template: `
    <div v-bind:class="timeOut">      
    <img v-bind:src="img"/>
    <h2>{{ timeLeft }}</h2>
    </div>
    `,
    props: ['time'],
    created() {
        console.log('this.time', this.time);
        this.interval = setInterval(() => {
            this.currTime = Date.now();
        }, 10);
    },
    data() {
        return {
            isTimeOut: false,
            currTime: Date.now(),
            interval: null,
            img: 'img/timmer.png'
        };
    },
    methods: {
        onHandleClick() {
            this.isDarkMode = !this.isDarkMode;
        },
        checkTime(i) {
            if (i < 10) {
                i = '0' + i;
            } // add zero in front of numbers < 10
            return i;
        },
        emit() {
            this.$emit('due', 'Time is done')
        }
    },
    computed: {
        timeOut() {
            return (this.isTimeOut) ? 'red' : 'black'
        },
        timeLeft() {
            var now = this.currTime;
            var distance = this.time - this.currTime;
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            if (Math.floor(distance / 1000) <= 10) {
                this.isTimeOut = true
            }
            if (Math.floor(distance / 1000) <= 0) {
                clearInterval(this.interval);
                this.emit()
                var audio = new Audio("game-lose.mp3")
                // audio.play()
            }
            return minutes + ":" + seconds;
        },
    },
});