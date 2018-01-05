import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.store.findRecord('contact', params.contact_id)
  },
  actions: {
    saveContact(contact) {
      contact.save().then(() => this.transitionTo('admin.contacts'))
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