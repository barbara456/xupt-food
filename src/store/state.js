let defaultFood = '食堂'
try {
  if (localStorage.food) {
    defaultFood = localStorage.food
  }
} catch (e) {}

export default {
  food: defaultFood
}
