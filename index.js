const core = require("@actions/core");
const semver = require("semver");

try {
  const a = core.getInput("a");
  const b = core.getInput("b");
  const ca = semver.clean(a);
  const cb = semver.clean(b);
  const gt = semver.gt(ca, cb);
  core.setOutput("gt", gt);
} catch (err) {
  core.setFailed(err);
}
