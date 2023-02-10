class UsersController < ApplicationController
  before_action :set_user, only: %i[ show update destroy ]

  # GET /users
  # def index
  #   users = User.all
  #   render json: users
  # end

  # GET /users/1
  def show
    render json: @user
  end

  # signup - create account and login user
  def create
    user = User.new(user_params)
    if user.save
      session[:user_id] = user.id
      render json: user, status: :created
    else
      render json: user.errors, status: :unprocessable_entity
    end
  end

  # def create 
  #   @user = User.create!(user_params)
  #   session[:user_id] = @user.id # login_user from appCont 
  #   render json: @user, status: :create
  # end

  # PATCH/PUT /users/1
  # def update
  #   if @user.update(user_params)
  #     render json: @user
  #   else
  #     render json: @user.errors, status: :unprocessable_entity
  #   end
  # end

  # DELETE /users/1
  # def destroy
  #   @user.destroy
  # end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def user_params
      params.require(:user).permit(:name, :country, :password, :username)
    end
end
