import Component from '@ember/component';

export default Component.extend({
  buttonLavel: 'Save',
  actions: {
    buttonClicked(params) {
      this.action(params)
      
    },
  }
});
