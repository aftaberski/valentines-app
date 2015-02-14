get '/' do
  erb :welcome
end

get '/login' do
  erb :'auth/login'
end

post '/login' do
  user = User.find_by(name: params[:user][:name])

  if user.try(:authenticate, params[:user][:password])
    session[:user_id] = user.id
    redirect '/'
  else
    redirect '/login'
  end
end

get '/logout' do
  session[:user_id] = nil
  redirect '/'
end

get '/signup' do

end
