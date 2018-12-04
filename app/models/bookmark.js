import DS from 'ember-data';

export default DS.Model.extend({

  // We need to define each attribute that is available in our bookmark model
  name: DS.attr('string'),
  url: DS.attr('string'),
  hacker: DS.attr('string'),
  verb: DS.attr('string'),
  created: DS.attr('date', {
    defaultValue() { return new Date(); }
  }),
  user: DS.belongsTo('user')
});
