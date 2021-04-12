let app = new Vue({
    el: "#app",
    data: {
        storeName: "",
        products: [],
    },
    methods: {
        apiStore: function () {
            axios
                .get("http://us-central1-test-b7665.cloudfunctions.net/api/stores/ijpxNJLM732vm8AeajMR")
                .then((response) => {
                    this.storeName = response.data.name
                    console.log(this.storeName)
                })
                .catch((error) => {
                    alert(error);
                });
        },
        apiProducts: function () {
            axios
                .get("http://us-central1-test-b7665.cloudfunctions.net/api/stores/ijpxNJLM732vm8AeajMR/products")
                .then((response) => {
                    this.products = response.data
                    console.log(this.products)
                })
                .catch((error) => {
                    alert(error);
                });
        },
    },
    mounted() {
        this.apiStore();
        this.apiProducts();
    },
});
