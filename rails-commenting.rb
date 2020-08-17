# ASSESSMENT 6: Rails Commenting Challenge
# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# app/controller/blog_posts_controller.rb

# 1) The controller is the middle man that holds the logic which updates or searches for the information in the model to present to the view
class BlogPostsController < ApplicationController
  def index
    # 2) declares an instance varibale and gets all of the blogs posts from the model and send it to the view
    @posts = BlogPost.all
  end

  def show
    # 3) declares and instance variable that finds an individual blog post by passing the id to the model and sends it to the view
    @post = BlogPost.find(params[:id])
  end

  # 4) rails convention for the route needed to display a form but doesn't do anything with the model/view. rails will display the 'new' page. a midway point between C and R in CRUD.
  def new
  end

  def edit
  end

  def create
    # 5) create a blog post by getting the blog post info  (strong params) from the view and sending it to the model
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
      # 6) if the deletion was not successful, redirects the page back to the original post
      redirect_to blog_post_path(@post)
    end
  end

  # 7) keyword that makes this method inaccessible outside of the class
  private
  def blog_post_params
    # 8) manage exactly which columns in the model can be added/updated with information
    params.permit(:title, :content)
  end

end


# app/models/blog_post.rb

# 9) the blog post model class
class BlogPost < ApplicationRecord
  # 10) describes the relationship to the comments class
  has_many :comments
end
