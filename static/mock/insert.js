const fs = require("fs")
let data = JSON.parse(fs.readFileSync("food.json").toString()).data;

let output = Object.keys(data).map((item, index) => {
    return data[item].map(item => Object.assign(item, { type: index + 1 }));
}).flat();

fs.writeFileSync("food_.json", JSON.stringify(output, null, 4))