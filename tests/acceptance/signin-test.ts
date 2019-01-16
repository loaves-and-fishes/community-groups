import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { click, fillIn } from 'ember-semantic-test-helpers/test-support';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

module('Acceptance | signin', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('visiting /signin', async function(assert) {
    server.createList('church', 1);

    await visit('/');

    assert.equal(currentURL(), '/signin');

    await fillIn('email', 'test@test.com');
    await click('Sign In');

    assert.equal(currentURL(), '/manage');
    assert.dom('.bg-white').hasText('Sample Group');
  });
});
