const { execSync } = require("child_process");
const fs = require("fs");

function sinkA(v) {
  return execSync(v).toString();
}

function sinkB(v) {
  fs.writeFileSync("/tmp/x", v);
  return "ok";
}

function sinkC(v) {
  return eval(v);
}

function sinkD(v) {
  return execSync(`echo ${v}`).toString();
}

function sinkE(v) {
  return Function(v)();
}

module.exports = { sinkA, sinkB, sinkC, sinkD, sinkE };
