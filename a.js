const { sinkA } = require("./sinks");
function f1(x) {
  return sinkA(x + "");
}
module.exports = { f1 };
