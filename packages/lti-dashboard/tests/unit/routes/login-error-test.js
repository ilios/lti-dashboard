import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('LoginErrorRoute', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    var route = this.owner.lookup('route:login-error');
    assert.ok(route);
  });
});
