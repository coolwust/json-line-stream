'use strict';

var Transform = require('stream').Transform;

function JsonLineStream() {
  var options = {
    allowHalfOpen: true,
    readableObjectMode: false,
    writableObjectMode: true
  }
  Transform.call(this, options);
}

function _transform(chunk, encoding, done) {
  this.push(JSON.stringify(chunk).replace(/\n/, ' ') + '\n');
  done();
}

function _flush(done) {
  done();
}

var properties = {
  constructor: {
    value: JsonLineStream,
    writable: true,
    configurable: true,
    enumerable: false
  }
}
JsonLineStream.prototype = Object.create(Transform.prototype, properties);
JsonLineStream.prototype._transform = _transform;
JsonLineStream.prototype._flush = _flush;
module.exports = JsonLineStream;
