class TripsController < ApplicationController
  before_action :set_trip, only: %i[ show update destroy ]

  # GET /trips
  def index
    trips = Trip.all
    render json: trips
  end

  # GET /trips/1
  def show
    render json: @trip
  end

  # POST /trips
  def create
    @trip = Trip.new(trip_params)
    if @trip.save
      render json: @trip, status: :created
    else
      render json: @trip.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /trips/1
  def update
    if @trip.update!(trip_params)
      render json: @trip, status: :accepted
  end

  # DELETE /trips/1
  def destroy
    @trip.destroy
  end

  private
    def set_trip
      @trip = Trip.find(params[:id])
    end


    def trip_params
      params.permit(:username, :route_travelled, :hours, :things_to_do, :places_to_eat, :user_id, :castle_id)
    end
end
