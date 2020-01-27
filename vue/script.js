const app = new Vue({
    el: '#app',
    data: {
        count: 0
    },
    methods: {
        inc: function() {
            this.count++;
        },
        dec: function() {
            this.count--;
        },
        random: function() {
            this.count = Math.floor(Math.random() * 99);
        }
    }
})