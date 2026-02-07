const { f1 } = require("./a");
const { f2 } = require("./b");
const { f3 } = require("./c");
const { f4 } = require("./d");
const { f5 } = require("./e");

module.exports = require("express").Router()
  .post("/c1", (r, s) => s.send(f1(r.body.x)))
  .post("/c2", (r, s) => s.send(f2(r.query.y)))
  .post("/c3", (r, s) => s.send(f3(r.headers.z)))
  .post("/c4", (r, s) => s.send(f4(r.body.cmd)))
  .post("/c5", (r, s) => s.send(f5(r.query.p)));
