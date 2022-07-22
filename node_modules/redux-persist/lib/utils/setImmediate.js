'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var setImmediate = typeof global !== 'undefined' && typeof global.setImmediate !== 'undefined' ? global.setImmediate : setTimeout;

exports.default = setImmediate;