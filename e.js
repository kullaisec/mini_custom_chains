const { sinkD, sinkE } = require("./sinks");

function stepD(x) {
  return sinkD(x);
}

function f5(p) {
  return sinkE(p);
}

module.exports = { stepD, f5 };
