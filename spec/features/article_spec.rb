require_relative '../spec_helper'

class ArticleSpec
  describe 'articles' do
    let(:user) { User.create(name: 'Anna', password: '123')}
    let(:article) { Article.create(title: 'Happy Birthday Missy', content: 'U da best!', user_id: user.id)}

    before do
      article
    end

    before do
      user
    end

    it 'should respond to /articles/all' do
      get '/articles/all'
      expect(last_response).to be_ok
    end

    # it 'should respond to /articles/new' do
    #   get '/articles/new'
    #   expect(last_response).to be_ok
    #   # expect(last_response.body).to include 'add'
    # end

    it 'should respond to /articles/:id' do
      get "/articles/#{article.id}"
      expect(last_response).to be_ok
      # expect(last_response.body).to include 'update'
      expect(last_response.body).to include 'Missy'
    end

    xit 'should respond to /articles/new' do
      post '/articles/new', params={ article: {title: 'Snow is cool', content: 'Snow! Snow!', user_id: user.id}}
      expect(last_response).to be_redirect
      follow_redirect!
      # expect( last_response.body).to include 'new'
      expect( last_response.body).to include 'Snow is cool'
    end
  end
end
