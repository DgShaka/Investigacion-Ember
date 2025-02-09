import { module, test } from 'qunit';
import { setupRenderingTest } from 'proyecto-investigacion-ember/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | regist', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Regist />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <Regist>
        template block text
      </Regist>
    `);

    assert.dom().hasText('template block text');
  });
});
