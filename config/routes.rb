WorkoutApp::Application.routes.draw do
  resources :workouts
  root to: 'workouts#index'
end
