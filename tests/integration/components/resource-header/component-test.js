import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | resource-header', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`<ResourceHeader @name='test'/>`);

    assert.dom(this.element).hasText('test');

    await render(hbs`
      <ResourceHeader @name='test'>
        hello
      </ResourceHeader>
    `);

    assert.dom(this.element).hasText('test hello');
  });
});
