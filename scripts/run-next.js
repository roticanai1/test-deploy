const { spawn } = require("node:child_process");
const path = require("node:path");

const nodeMajor = Number(process.versions.node.split(".")[0]);
const args = process.argv.slice(2);
const nextBin = path.resolve(__dirname, "..", "node_modules", "next", "dist", "bin", "next");

const nodeArgs = nodeMajor >= 25
  ? ["--no-experimental-webstorage", nextBin, ...args]
  : [nextBin, ...args];

const child = spawn(process.execPath, nodeArgs, {
  stdio: "inherit",
  env: process.env,
});

child.on("exit", (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
  } else {
    process.exit(code ?? 1);
  }
});
