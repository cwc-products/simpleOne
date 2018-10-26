const { goDucks } = require('./go-ducks');
goDucks.appendMessages([() => 'A']);
goDucks.appendMessages([() => "IT'S"]);
console.log(goDucks.quack());
