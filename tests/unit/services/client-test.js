import { module, test } from 'qunit';
import { setupTest } from 'proyecto-investigacion-ember/tests/helpers';

module('Unit | Service | client', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:client');
    assert.ok(service);
  });
});
