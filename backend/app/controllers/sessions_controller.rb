class SessionsController < ApplicationController
    skip_before_action :authenticate_user, only: [:create, :destroy]

    #Sessions-
    # POST '/login' - create a new session (not create a USER)
    def create
      @user = User.find_by_username(params[:username])
      if @user&.authenticate(params[:password]) 
        session[:user_id] = @user.id
        render json: @user, status: :ok
      else
        render json: { errors: ["Username and Password must match"]}, status: :unauthorized
      end
    end
  
    #DELETE '/logout' - destroy the session
    def destroy
      session.delete :user_id
    end
end
