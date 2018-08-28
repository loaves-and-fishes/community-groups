import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { click, fillIn } from 'ember-semantic-test-helpers/test-support';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

module('Acceptance | signup', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('Signup works', async function(assert) {
    await visit('/signup');

    assert.equal(currentURL(), '/signup');

    await fillIn('Email', 'test@test.com');
    await click('Create Account');

    assert.equal(currentURL(), '/');
  });

  test('Signup handles required fields', async function(assert) {
    await visit('/signup');

    assert.equal(currentURL(), '/signup');

    await click('Create Account');

    assert.equal(currentURL(), '/signup');
  });
});
