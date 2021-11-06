import './cmps/time.cmp.js';
import './cmps/countdown.cmp.js';
import './cmps/whowatch.cmp.js';
import './cmps/show-coords.cmp.js';

const options = {
    el: '#my-app',
    data() {
        return {
            startingTime: Date.now() + 1000 * 15,
            modalShown: false,
        };
    },
methods: {
    log(str) {  
        console.log(str);
    }
}
};

new Vue(options);
