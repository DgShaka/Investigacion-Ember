import { module, test } from 'qunit';
import { setupRenderingTest } from 'proyecto-investigacion-ember/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | thank-you-screen', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<ThankYouScreen />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <ThankYouScreen>
        template block text
      </ThankYouScreen>
    `);

    assert.dom().hasText('template block text');
  });
});
