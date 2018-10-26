const { goDucks } = require('./go-ducks');
goDucks.appendMessages([() => "IT'S"]);
console.log(goDucks.quack());