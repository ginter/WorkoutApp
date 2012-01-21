var Workouts = Backbone.Collection.extend({
  model: Workout,
  url: '/workouts'
});