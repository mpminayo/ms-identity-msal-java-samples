const { exec } = require('child_process');
const path = require('path');

// Read the UserFlowDelay from the args.
// @see launch.json
const startDelay = Math.max(0, Number(process.argv[2] || 0) - Date.now());

if (startDelay > 0) {
  console.log(`Waiting for the user flow setup to finish before launching sample...`);
}

setTimeout(() => {
  console.log('Running Sample...');
  exec('mvn clean package', { cwd: path.resolve('.') }, (err, output) => {
    if (err) {
      console.error("Error on running commands: ", err);
      return;
    }
  });
}, startDelay);
