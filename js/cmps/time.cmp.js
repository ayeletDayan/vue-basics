Vue.component('my-time', {
    template: `
    <div v-bind:class="getMode" v-on:click="onHandleClick()">
        <h2>{{ timeToShow }}</h2>
        {{isDarkMode}}
        <img v-bind:src="getSeason" />
    </div>
    `,
    data() {
        return {
            isDarkMode: false,
            time: new Date(),
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
    },
    computed: {
        getMode() {
            return this.isDarkMode ? 'dark' : 'light';
        },
        timeToShow() {
            const today = this.time;
            let h = today.getHours();
            let m = today.getMinutes();
            let s = today.getSeconds();
            m = this.checkTime(m);
            s = this.checkTime(s);
            return h + ':' + m + ':' + s;
            // document.getElementById('time').innerHTML = h + ':' + m + ':' + s;
            // setTimeout(startTime, 1000);
        },
        getSeason() {
            const month = this.time.getMonth();
            if (month <= 2) return 'season-imgs/winter.png';
            if (month <= 5) return 'season-imgs/spring.png';
            if (month <= 8) return 'season-imgs/summer.png';
            return 'season-imgs/autumn.png';
        },
    },
    created() {
        setInterval(() => {
            this.time = new Date();
        }, 1000);
    },
});
