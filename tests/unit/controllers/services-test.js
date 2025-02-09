import { module, test } from 'qunit';
import { setupTest } from 'proyecto-investigacion-ember/tests/helpers';

module('Unit | Controller | services', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:services');
    assert.ok(controller);
  });
});
