const LOG_TYPE = require('../constants').LOG_TYPES;

module.exports = class LogCollectCypressCommand {
  constructor(collectorState, config) {
    this.config = config;
    this.collectorState = collectorState;
  }

  register() {
    Cypress.on('command:start', (command) => {
      const log = ['command started!'];

      log.push(`name: ${command.attributes.name}`);
      log.push(`logs: ${command.attributes.logs}`);
      log.push(`args: ${JSON.stringify(command.attributes.args)}`);
      log.push(`index: ${command.attributes.myIndex}`);

      this.collectorState.addLog(
        [LOG_TYPE.CYPRESS_COMMAND_START, log.join('\n'), ''],
        command.attributes.id
      );
    });

    Cypress.on('command:end', (command) => {
      const log = ['command ended!'];

      log.push(`name: ${command.attributes.name}`);
      log.push(`logs: ${command.attributes.logs}`);
      log.push(`args: ${JSON.stringify(command.attributes.args)}`);
      log.push(`index: ${command.attributes.myIndex}`);

      this.collectorState.addLog(
        [LOG_TYPE.CYPRESS_COMMAND_END, log.join('\n'), ''],
        command.attributes.id
      );
    });
  }
};
