var WorkoutApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  init: function(workouts) {
    new WorkoutApp.Routers.Workouts();
    this.workouts = new WorkoutApp.Collections.Workouts(workouts);
    Backbone.history.start();
  }
};