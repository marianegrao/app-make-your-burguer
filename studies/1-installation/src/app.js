const MyNameApp = {
	data() {
		return {
			name: "Maria",
			age: "19",
			profession: " Software Developer",
		};
	},
};

Vue.createApp(MyNameApp).mount("#app");
