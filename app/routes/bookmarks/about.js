import Route from '@ember/routing/route';

export default Route.extend({
  // Ember Data Query to find a record
  model() {
    //return this.get('store').findRecord('bookmark', 1);

    // Query Record takes 2 parameters: 1: The name of the model, 2: A JS object which is a GET Query parameter for Talking to an HTTP-Based API
    this.get('store').queryRecord('bookmark', {aboutIsNull: true});


  }
});
