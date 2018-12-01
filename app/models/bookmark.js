import DS from 'ember-data';

export default DS.Model.extend({

  // We need to define each attribute that is available in our bookmark model
  name: DS.attr(),
  url: DS.attr(),
  hacker: DS.attr(),
  verb: DS.attr(),
  created: DS.attr()

});
