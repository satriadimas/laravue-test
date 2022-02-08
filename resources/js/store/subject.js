export const subject = {
    async fetchData(context) {
        try {
            let response = await axios.get("/api/getData", {
                headers: { token: localStorage.getItem("user-token") },
            });
            context.commit("setUsername", response.data.name);
        } catch (error) {
            localStorage.setItem("user-token", null);
            throw error;
        }
    },
    async login(context) {
        try {
            let response = await axios.post("/api/login", context.state.input);
            localStorage.setItem("user-token", response.data.access_token);
            context.commit("setUsername", response.data.name);
        } catch (error) {
            throw error;
        }
    },
    async logout(context) {
        try {
            let response = await axios.get("/api/logout", {
                headers: { token: localStorage.getItem("user-token") },
            });
            context.commit("setUsername", null);
            localStorage.setItem("user-token", null);
        } catch (error) {
            throw error;
        }
    },
};
