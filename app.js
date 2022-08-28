Vue.createApp({
    data() {
        return {
            items: [],
            enteredValue: "",
        };
    },
    methods: {
        addItem() {
            this.items.push(this.enteredValue);
            this.enteredValue = "";
        },
    },
}).mount("#app");

