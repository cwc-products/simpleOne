const assert = require('assert'),
    vows = require('vows'),
    { goDucks } = require('../go-ducks');

vows.describe('serious-calculations').addBatch({
  'when performing serious calculations': {
    topic: () => {
      goDucks.appendMessages([()=>'five by five']);
      return goDucks.quack();
    },
    'result should be valid': (topic) => {
      assert.isArray(topic);
      assert.equal(topic[0], 'five');
    }
  }
}).export(module);
