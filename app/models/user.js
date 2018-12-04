import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
  username: DS.attr('string'),
  email: DS.attr('string'),
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  avatar: DS.attr('string'),
  isAdmin: DS.attr('boolean', {
    defaultValue: false
  }),
  created: DS.attr('date', {
    defaultValue() {return new Date(); }
  }),
  bookmarks: DS.hasMany('bookmark'),
  fullName: computed('firstName', 'lastName', function() {
    return `${this.firstName} ${this.lastName}`;
  })
  // fullName: computed('firstName', 'lastName', {
  //   return `${this.get('firstName')} ${this.get('lastName')}`
  // })
});
