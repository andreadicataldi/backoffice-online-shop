let app = new Vue({
	el: "#app",
	data: {
		storeName: "",
		products: [],
		id: "",
	},
	methods: {
		apiStore: function () {
			axios
				.get(
					"http://us-central1-test-b7665.cloudfunctions.net/api/stores/ijpxNJLM732vm8AeajMR"
				)
				.then((response) => {
					this.storeName = response.data.name;
				})
				.catch((error) => {
					alert(error);
				});
		},
		apiProducts: function () {
			axios
				.get(
					"http://us-central1-test-b7665.cloudfunctions.net/api/stores/ijpxNJLM732vm8AeajMR/products"
				)
				.then((response) => {
					this.products = response.data;
				})
				.catch((error) => {
					alert(error);
				});
		},
		deleteData: function (id) {
			this.id = id;
			// console.log(id);
			axios
				.delete(
					"http://us-central1-test-b7665.cloudfunctions.net/api/stores/ijpxNJLM732vm8AeajMR/products/" +
						this.id
				)
				.catch((error) => {
					alert(error);
				});
			location.reload();
		},
		/* 		postData: function {
			axios.post(
				""
			)
		} */
	},
	mounted() {
		this.apiStore();
		this.apiProducts();
	},
});
