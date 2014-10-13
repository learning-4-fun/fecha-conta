class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  APP_ID = APP_CONFIG['app_id']
  APP_SECRET = APP_CONFIG['app_secret']
  CALLBACK_URL = APP_CONFIG['callback_url']

  def index
  	if session['access_token']
      @graph = Koala::Facebook::API.new(session['access_token'])
      friends = @graph.get_connections('me', 'friends')
      # Utilizar os amigos
      friends.each do |f|
        puts f['name'] + ' está usando o app.'
      end
    else
      redirect_to '/login'
    end
  end

  def login
    session['oauth'] = Koala::Facebook::OAuth.new(APP_ID, APP_SECRET, CALLBACK_URL)
	  redirect_to session['oauth'].url_for_oauth_code(:permissions => "user_friends")
  end

  def logout
    session['oauth'] = nil
    session['access_token'] = nil
    redirect_to "/"
  end

  def callback
  	session['access_token'] = Koala::Facebook::OAuth.new(APP_ID, APP_SECRET, CALLBACK_URL).get_access_token(params[:code])
  	redirect_to '/'
  end
end
