post "/articles/:id/votes" do |id|
  # getting into this route from ajax
  # so we can associate vote to article
  article = Article.find(id)
  # actually creating vote
  if article.votes.find_by(user_id: current_user.id)
    return (article.votes.count).to_json
  else
    article.votes.create(user_id: current_user.id)

    if request.xhr?
      # content we want to send back is json
      content_type :json
      # what we're actually sending back to our SUCCESS function
      (article.votes.count).to_json
    else
      redirect "/"
    end
  end
end