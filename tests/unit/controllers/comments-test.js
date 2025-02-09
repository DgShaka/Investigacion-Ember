import { module, test } from 'qunit';
import { setupTest } from 'proyecto-investigacion-ember/tests/helpers';

module('Unit | Controller | comments', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:comments');
    assert.ok(controller);
  });
});
