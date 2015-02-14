userids = (1..10).to_a
articleids = (1..10).to_a

10.times do
  User.create(name: Faker::Name.name, password: "123")
end


10.times do
  Article.create(title: Faker::Lorem.sentence, content: Faker::Lorem.paragraph, user_id: userids.shuffle.sample )
end


50.times do
  Comment.create(content: Faker::Lorem.sentence, user_id: userids.shuffle.sample, article_id: articleids.shuffle.sample)
end

50.times do
  Vote.create(user_id: userids.shuffle.sample, article_id: articleids.shuffle.sample)
end