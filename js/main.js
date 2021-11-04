import './cmps/time.cmp.js';
import './cmps/countdown.cmp.js';
import './cmps/whowatch.cmp.js';

const options = {
    el: '#my-app',
    data() {
        return {
            startingTime: Date.now() + 1000 * 15,
        };
    },
methods: {
    log(str) {  
        console.log(str);
    }
}
};

new Vue(options);
