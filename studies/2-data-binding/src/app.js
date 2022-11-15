const MyNameApp = {
	data() {
		return {
			name: "",
			age: "19",
			profession: " Software Developer",
			input_name: "",
		};
	},
	methods: {
		submitForm(e) {
			e.preventDefault();
			this.name = this.input_name;
		},
	},
};

Vue.createApp(MyNameApp).mount("#app");
