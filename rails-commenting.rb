# ASSESSMENT 6: Rails Commenting Challenge
# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# app/controller/blog_posts_controller.rb

# 1)
class BlogPostsController < ApplicationController
  def index
    # 2)
    @posts = BlogPost.all
  end

  def show
    # 3)
    @post = BlogPost.find(params[:id])
  end

  # 4)
  def new
  end

  def edit
  end

  def create
    # 5)
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to @post
    else
      render action: :new
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # 6)
      redirect_to blog_post_path(@post)
    end
  end

  # 7)
  private
  def blog_post_params
    # 8)
    params.permit(:title, :content)
  end

end


# app/models/blog_post.rb

# 9)
class BlogPost < ApplicationRecord
  # 10)
  has_many :comments
end
