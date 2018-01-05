import { match, not } from '@ember/object/computed';
import Controller from '@ember/controller';

export default Controller.extend({
  emailAddress: '',
  isValid: match('emailAddress', /^.+@.*\..+$/),
  isDisabled: not('isValid'),
  responseMessage: '',
  actions: {
    onClickSaveInvitation() {
      const email = this.get('emailAddress')
      const newInvitation = this.store.createRecord('invitation', { email: email })
      newInvitation.save().then(() => {
      	  this.set('responseMessage', `Thank you! We have just saved your email address: ${this.get('emailAddress')}`)
          this.set('emailAddress', '')
        })
     },
   },
});
