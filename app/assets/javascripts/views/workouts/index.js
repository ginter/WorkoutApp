WorkoutApp.Views.WorkoutsIndex = Backbone.View.extend({
  initialize: function() {
  },
  
  render: function() {
    $(this.el).html(JST['workouts/index']({ workouts: this.collection }));
    return this;
  }
});