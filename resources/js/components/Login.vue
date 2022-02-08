<template>
    <div class="form-login">
        <h1>Login</h1>
        <input type="text" name="email" v-model="email" placeholder="Email" />
        <input
            type="password"
            name="password"
            v-model="password"
            placeholder="Password"
        />
        <button type="button" v-on:click="login()">Login</button>
    </div>
</template>

<script>
export default {
    name: "Login",
    computed: {
        email: {
            get() {
                return this.$store.state.input.email;
            },
            set(val) {
                this.$store.commit("setEmail", val);
            },
        },
        password: {
            get() {
                return this.$store.state.input.password;
            },
            set(val) {
                this.$store.commit("setPassword", val);
            },
        },
    },
    methods: {
        async login() {
            if (!this.email || !this.password) {
                console.log("A email and password must be present");
                return;
            }
            try {
                await this.$store.dispatch("login");
                this.$router.push("/dashboard");
            } catch (error) {
                console.log(error);
            }
        },
    },
};
</script>

<style scoped>
.form-login {
    width: 500px;
    border: 1px solid #cccccc;
    background-color: #ffffff;
    margin: auto;
    margin-top: 200px;
    padding: 20px;
}
</style>
