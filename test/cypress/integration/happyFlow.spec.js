import {happyFlow} from './happyFlow';

describe('Happy flow', () => {
  /**
   * Covers:
   * - printing of cy.commands
   * - printing xhr with STUBBED
   * - printing of console warn and console error
   * - printing of cy.route in case of XMLHTTPREQUEST API
   */
  it('Happy flow', () => {
    happyFlow();
    cy.get('breaking-get');
  });
});
