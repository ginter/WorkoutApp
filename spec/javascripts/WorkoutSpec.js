var workoutData = [{
  date: 'Today',
  description: 'First Workout',
  exercises: [
    {
      name: 'Deadlift'
    },
    {
      name: 'Squat'
    }
  ]
}];

describe('Workout', function() {
  beforeEach(function() {
    this.workout = new Workout(workoutData[0]);
  });
  
  it('creates from data', function() {
    expect(this.workout.get('exercises').length).toEqual(2);
  });
});