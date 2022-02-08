<template>
    <div>
        <h1>Welcome {{ Username }}, <a @click="logout">Logout</a></h1>
    </div>
</template>

<script>
export default {
    data() {
        return {
            token: localStorage.getItem("user-token"),
        };
    },
    computed: {
        Username: {
            get() {
                return this.$store.state.Username;
            },
        },
    },
    created() {
        this.fetchData();
    },
    methods: {
        async fetchData() {
            try {
                await this.$store.dispatch("fetchData");
            } catch (error) {
                this.$router.push("/login");
            }
        },
        async logout() {
            try {
                await this.$store.dispatch("logout");
                this.$router.push("/login");
            } catch (error) {
                console.log(error);
            }
        },
    },
};
</script>

<style scoped></style>
