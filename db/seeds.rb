anna = User.create(name: "Anna", password: "anna")
missy = User.create(name: "Missy", password: "missy")
article = Article.create(title:"Anna + Missy", content: "The best couple for sure", user_id: anna.id)
comment = Comment.create(content: "Yeah, def!", user_id: missy.id, article_id: article.id)
vote = Vote.create(user_id: missy.id, article_id: article.id)


# userids = (1..10).to_a
# articleids = (1..10).to_a

# 10.times do
#   User.create(name: Faker::Name.name, password: "123")
# end


# 10.times do
#   Article.create(title: Faker::Lorem.sentence, content: Faker::Lorem.paragraph, user_id: userids.shuffle.sample )
# end


# 50.times do
#   Comment.create(content: Faker::Lorem.sentence, user_id: userids.shuffle.sample, article_id: articleids.shuffle.sample)
# end

# 50.times do
#   Vote.create(user_id: userids.shuffle.sample, article_id: articleids.shuffle.sample)
# end