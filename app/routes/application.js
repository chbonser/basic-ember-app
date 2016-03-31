import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.$.get('/v2/preload.json');
  }
});
