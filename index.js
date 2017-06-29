var fs = require('fs');
var path = require('path');
var mkdirp = require('mkdirp');

module.exports = function createPseudoModule(cwd, name, entryPoint) {
  // Compute the location and content for the pseudo-module.
  var modulePath = path.join(cwd, 'node_modules', name, entryPoint);
  var moduleText =
    "module.exports = require('" +
    path.join(cwd, entryPoint).replace(/\\/g, '\\\\') +
    "');";

  // Create the pseudo-module, use `mkdirp` to handle nested dirs.
  mkdirp.sync(path.dirname(modulePath));
  fs.writeFileSync(modulePath, moduleText);
};
