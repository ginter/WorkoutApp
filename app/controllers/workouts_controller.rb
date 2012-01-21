class WorkoutsController < ApplicationController
  respond_to :html, :json
  
  def index
    respond_with(@workouts = Workout.all)
  end
  
  def show
    respond_with(@workout = Workout.find(params[:id]))
  end
  
  def create
    @workout = Workout.new(params[:workout])
    
    if @workout.save
      respond_with(@workout)
    else
      respond_with(@workout, status: :unprocessable_entity)
    end
  end
end