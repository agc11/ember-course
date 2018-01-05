import Ember from 'ember'

export default Ember.Route.extend({
  
  model(params) {
    return this.store.findRecord('library', params.library_id)
  },
  setupController(controller, model) {
    this._super(controller, model)
    controller.set('title', 'Edit library')
    controller.set('buttonLabel', 'Save changes')
    controller.set('action', this.actions.saveLibrary.bind(this))
  },
  renderTemplate() {
    this.render('libraries/form')
  },
  actions: {
    saveLibrary(library) {
      library.save().then(() => this.transitionTo('libraries'))
    },
    willTransition(transition) {
      const model = this.controller.get('model')
      if (model.get('hasDirtyAttributes')) {
        const confirmation = confirm('Your changes haven´t saved yet. Would you like to leave this form?')
        if (confirmation) {
          model.rollbackAttributes()
	      } else {
	        transition.abort()
	      }
      }
    }
  },
})
