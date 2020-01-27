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
        }
    }
})