const core = require('@actions/core');
const github = require('@actions/github');
const yaml = require('js-yaml');
const fs   = require('fs');

try {
  // `who-to-greet` input defined in action metadata file
  const configFilePath = core.getInput('path');
  console.log(`Config File Path ${configFilePath}`);

  const doc = yaml.load(fs.readFileSync(configFilePath, 'utf8'));
  core.setOutput("json", JSON.stringify(doc));
} catch (error) {
  core.setFailed(error.message);
}
