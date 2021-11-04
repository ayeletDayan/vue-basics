import './cmps/time.cmp.js';

const options = {
    el: '#my-app',
    data() {
        return {
            startingTime: Date.now(),
        };
    },
};

new Vue(options);
