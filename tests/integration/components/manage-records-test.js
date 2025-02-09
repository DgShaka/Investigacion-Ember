import { module, test } from 'qunit';
import { setupRenderingTest } from 'proyecto-investigacion-ember/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | manage-records', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<ManageRecords />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <ManageRecords>
        template block text
      </ManageRecords>
    `);

    assert.dom().hasText('template block text');
  });
});
