require 'sinatra'
require 'sinatra/reloader'
require 'pry'

configure do
    enable :sessions
end

def random_video()
        vid1 = 'bnVUHWCynig'
        vid2 = '2EwViQxSJJQ'
        vid3 = 'ViwtNLUqkMY'
        vid4 = 'FHp2KgyQUFk'
        vid5 = 'VBmMU_iwe6U'
        vid6 = 'iP6XpLQM2Cs'
    videos = [vid1, vid2, vid3, vid4, vid5, vid6]
    return videos[rand(6)]
end

get '/' do
    result = "//www.youtube.com/embed/" + random_video() + "?autoplay=1"

    erb :index, :locals => {:result => result}

end

get '/sets' do
    session[:sets] ||= {}
    @output = session[:sets].to_a
    erb :sets
end

get '/sets/new' do
    session[:sets] ||= {}
    form = 'hello'
    erb :new, :locals => {:form => form}

end


put '/sets' do
    session[:sets] ||= {}
    session[:sets][params["set_name"]] ||= {}
    session[:sets][params["set_name"]][:name] = params["set_name"]
    session[:sets][params["set_name"]][:vidnum] = params["video"].split("\n")
    session[:sets][params["set_name"]][:description] = params["description"]
    @output = session[:sets].to_a
    redirect to('/sets')
end

get '/sets/:set_name' do
    session[:sets] ||= {}
    
    @show = session[:sets][params["set_name"]]
    erb :show
end

get '/sets/:set_name/edit' do
    session[:sets] ||= {}
    @show = session[:sets][params["set_name"]]
    erb :edit

end

put '/sets/:set_name' do
    session[:sets] ||= {}
    session[:sets][params["set_name"]] ||= {}
    session[:sets][params["set_name"]][:vidnum] = params["video"].split("\n")
    session[:sets][params["set_name"]][:description] = params["description"]
    @output = session[:sets].to_a
    redirect to('/sets')
end

get '/sets/:set_name/play' do
    session[:sets] ||= {}
    @show = session[:sets][params["set_name"]]
    play_results = @show[:vidnum]
    video = play_results[rand(play_results.length)]
    result = "//www.youtube.com/embed/" + video + "?autoplay=1"
    erb :play, :locals => {:result => result}
end

post '/play' do
    play_results = session[:sets][params["play"]][:vidnum]
    video = play_results[rand(play_results.length)]
    result = "//www.youtube.com/embed/" + video + "?autoplay=1"
    erb :play, :locals => {:result => result}
end

delete '/sets/:set_name' do
    session[:sets] ||= {}
    @output = session[:sets].delete(params["set_name"])
    redirect to('/sets')
end
