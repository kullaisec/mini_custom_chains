const { sinkB, sinkC } = require("./sinks");

function midB(v) {
  return sinkB(v);
}

function f3(h) {
  return sinkC(h);
}

module.exports = { midB, f3 };
