const fs = require("fs");
let data = JSON.parse(fs.readFileSync("food.json").toString()).data;
let w = Object.keys(data.foods).map(item => data.foods[item]).flat();
fs.writeFileSync("food_.json", JSON.stringify(w, null, 4));
console.log(Object.assign({}, ...
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map(item => {
        return {
            [item]: w.filter(item_ => item_.spell.toUpperCase().startsWith(item))
        }
    })));