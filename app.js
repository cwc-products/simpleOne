const { goDucks } = require('./go-ducks');
goDucks.appendMessages([() => 'SECRET']);
goDucks.appendMessages([() => 'A']);
goDucks.appendMessages([() => "IT'S"]);
console.log(goDucks.quack());
