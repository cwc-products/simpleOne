(function goDucks() {
  this.messages = [()=>'hi thar'];

  /*
   DO NOT EDIT BELOW THIS LINE
  */
  (function quack(context) {
    try{
      context.messages.map((message) => console.log(message().split(/\s/)[0]));
    } catch (e) {
      console.error('quack');
    }
  })(this);
})();
