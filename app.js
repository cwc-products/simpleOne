const { goDucks } = require('./go-ducks');
goDucks.appendMessages([() => 'SECRET']);
console.log(goDucks.quack());