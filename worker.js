function shellCommand(command) {
  if (!command || !command.replace(/#[^\n]*/g, '').trim().length) return
  return {
    command: 'sh',
    args: ['-x', '-c', command]
  }
}
module.exports = {
  init: function (config, context, done) {
    var config = config || {}
    var steps = {} // environment, prepare, test, deploy, cleanup
    if (config.npmInstall) {
      steps['prepare'] = "npm install"
    }
    if (config.verstatGenerate) {
      steps['test'] = "node_modules/.bin/verstat -e static generate"
      steps['cleanup'] = "rm -rf out"
    }

    done(null, steps);
  }
}
