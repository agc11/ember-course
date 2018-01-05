import Component from '@ember/component';
import { observer } from '@ember/object';
import { cancel, later } from '@ember/runloop';

export default Component.extend({
  tagName: 'span',
  className: ['label label-success label-fade'],
  isShowing: false,
  isShowingChanged: observer('isShowing', function() {
    this._runLater = later(() => this.set('isShowing', false), 30000)
  }),
  resetRunLater() {
    this.set('isShowing', false)
    cancel(this._runLatter)
  },
  willDestroy() {
    this.get('resetRunLater').call(this)
    this._super(...arguments)
  },
});
