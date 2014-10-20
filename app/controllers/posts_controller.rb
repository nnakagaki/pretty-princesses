class PostsController < ApplicationController
  def create
    @post = Post.new(post_params)
    if @post.save!
      render json: @post
    else
      raise "CANNOT CREATE"
    end
  end

  def index
    @posts = Post.all
    render json: @posts
  end

  def destroy
    @post = Post.find(params[:id])
    if @post.destroy
      render json: @post
    else
      raise "CANNOT DESTROY"
    end
  end

  def update
    @post = Post.find(params[:id])
    if @post.update(post_params)
      render json: @post
    end
  end

  def show
    @post = Post.find(params[:id])
    render json: @post
  end

  private
  def post_params
    params.require(:post).permit(:title, :body)
  end
end
