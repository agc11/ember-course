import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('agc11-navbar', 'Integration | Component | agc11 navbar', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{agc11-navbar}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#agc11-navbar}}
      template block text
    {{/agc11-navbar}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
