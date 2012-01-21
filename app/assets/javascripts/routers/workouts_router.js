WorkoutApp.Routers.Workouts = Backbone.Router.extend({
  routes: {
    '': 'index'
  },
  
  index: function() {
    $(body).append("Index");
  }
});