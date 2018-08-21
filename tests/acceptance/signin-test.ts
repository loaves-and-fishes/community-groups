import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { click } from 'ember-semantic-test-helpers/test-support';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

module('Acceptance | signin', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('visiting /signin', async function(assert) {
    server.createList('church', 1);

    await visit('/');

    assert.equal(currentURL(), '/signin');

    await click('Sign In');

    assert.equal(currentURL(), '/');
    assert.dom('.bg-blue').hasText('Church 0');
  });
});
