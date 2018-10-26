const { goDucks } = require('./go-ducks');
goDucks.appendMessages([() => ' TO']);
console.log(goDucks.quack());
