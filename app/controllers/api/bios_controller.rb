class Api::BiosController < ApplicationController
  
  def show
    render json: current_user.bio
  end

  def update
    @bio = Bio.find(params[:id])
      if @bio.save(bio_params)
        render json: @bio
      else
        render_error(@bio)
      end
  end

private

  def bio_params
    params.require(:bio).permit(:title, :body)
  end
  
end
