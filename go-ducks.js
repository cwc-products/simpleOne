const consumables = [() => 'TO'];

/*
  DO NOT EDIT BELOW THIS LINE
*/
exports.goDucks = (function goDucks(messages = []) {
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
        return newMessages.join(' ').trim();
      } catch (e) {
        console.error('quack');
      }
    }
  };
})(consumables);
