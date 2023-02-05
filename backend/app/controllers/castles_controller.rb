class CastlesController < ApplicationController
  before_action :set_castle, only: %i[ show update destroy ]

  # GET /castles
  def index
    @castles = Castle.all
    render json: @castles
  end

  # GET /castles/1
  def show
    render json: @castle
  end

  # POST /castles
  def create
    @castle = Castle.new(castle_params)

    if @castle.save
      render json: @castle, status: :created, location: @castle
    else
      render json: @castle.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /castles/1
  def update
    if @castle.update(castle_params)
      render json: @castle
    else
      render json: @castle.errors, status: :unprocessable_entity
    end
  end

  # DELETE /castles/1
  def destroy
    @castle.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_castle
      @castle = Castle.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def castle_params
      params.require(:castle).permit(:name, :image, :location, :short_description, :hours_of_operation, :website, :user_id)
    end
end
