export const mutation = {
    setUsername(state, payload) {
        state.Username = payload;
    },
    setEmail(state, payload) {
        state.input.email = payload;
    },
    setPassword(state, payload) {
        state.input.password = payload;
    },
};
