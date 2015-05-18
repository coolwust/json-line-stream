'use strict';

var assert = require('assert');
var JsonLineStream = require('../lib/stream.js');

describe('JsonLineStream', function () {
  it('json objects should be converted to lines successfully.', function (done) {
    var stream = new JsonLineStream();
    var obj1 = {
      name: 'Xianghan Wang',
      hobbies: ['programming', 'playing piano', 'porn']
    };
    var obj2 = {
      name: 'Jun Li',
      hobbies: ['play turtles', 'programming']
    }
    stream.on('readable', function () {
      var chunk;
      while ((chunk = stream.read()) !== null) {
        console.log(chunk.toString());
      }
    });
    stream.on('end', function () {
      done();
    });
    stream.write(obj1);
    stream.write(obj2);
    stream.end();
  });
});
