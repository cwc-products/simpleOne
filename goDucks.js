(function goDucks() {
  this.messages = [()=>'hi'];

  /*
   DO NOT EDIT BELOW THIS LINE
  */
  return function quack() {
    try{
      this.messages.map((message) => console.log(message()));
    } catch (e) {
      console.error('quack');
    }
  }
})();
