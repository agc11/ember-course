import DS from 'ember-data';
import { and, notEmpty } from '@ember/object/computed'
import Faker from 'faker'

export default DS.Model.extend({
  name: DS.attr('string'),
  address: DS.attr('string'),
  phone: DS.attr('string'),
  books: DS.hasMany('book'),
  isValidName: notEmpty('name'),
  isValidAddress: notEmpty('address'),
  isValidPhone: notEmpty('phone'),
  isValid: and('isValidName', 'isValidAddress', 'isValidPhone'),
  randomize() {
    this.set('name', Faker.company.companyName() + ' Library')
    this.set('address', this._fullAddress())
    this.set('phone', Faker.phone.phoneNumber())

    return this
  },
  _fullAddress() {
    return `${Faker.address.streetAddress()}, ${Faker.address.city()}` 
  },
});
