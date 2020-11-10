export default {
  changeFood(state, food) {
    state.food = food
    try {
      localStorage.food = food
    } catch (e) { }
  }
}
