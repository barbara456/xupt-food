let defaultFood = '食堂'
    // 当时用localStorage时，如果用户关闭了本地存储或者开了隐身模式这样的功能，我们的代码使用localStorage可能会直接导致浏览器跑出异常，代码就整个运行不了，所以最好在外层包裹一个try catch
try {
    if (localStorage.food) {
        defaultFood = localStorage.food
    }
} catch (e) {}

export default {
    food: defaultFood
}