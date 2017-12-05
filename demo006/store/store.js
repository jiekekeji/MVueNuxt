const store = new Vuex.Store({
  state: {
    count: 1
  },
  mutations: {
    increment (state) {
      state.count++;
      console.log("count", state.count)
    }
  }
})
