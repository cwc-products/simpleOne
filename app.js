const { goDucks } = require('./go-ducks');
goDucks.appendMessages([() => 'A']);
console.log(goDucks.quack());
