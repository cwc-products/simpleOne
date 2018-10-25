
const consumables = [()=>'oh'];

/*
  DO NOT EDIT BELOW THIS LINE
*/
exports.goDucks = (function goDucks(messages) {
  this.messages = [...messages];
  return {
    appendMessages: (messages) => {
      this.messages = [...messages, ...this.messages];
    },
    quack: () => {
      try{
        const newMessages = this.messages.map((message) => {
          let logMessage = message().split(/\s/)[0];
          return logMessage;
        });
        console.log(newMessages);
        return newMessages;
      } catch (e) {
        console.error('quack');
      }
    }
  };
})(consumables);
