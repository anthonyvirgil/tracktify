class TracktlistsController < ApplicationController
  before_action :set_track, only: [:show, :edit, :update, :destroy]

  def index
    @spotify_user = RSpotify::User.new(request.env['omniauth.auth']) if request.env['omniauth.auth']

    @top_tracks_one_month = @spotify_user&.top_tracks(limit: 20, offset: 0, time_range: 'short_term')
    @top_tracks_six_months = @spotify_user&.top_tracks(limit: 20, offset: 0, time_range: 'medium_term')
    @top_tracks_all_time = @spotify_user&.top_tracks(limit: 20, offset: 0, time_range: 'long_term')
  end
end