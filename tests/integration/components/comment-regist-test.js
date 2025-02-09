import { module, test } from 'qunit';
import { setupRenderingTest } from 'proyecto-investigacion-ember/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | comment-regist', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<CommentRegist />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <CommentRegist>
        template block text
      </CommentRegist>
    `);

    assert.dom().hasText('template block text');
  });
});
