module TracksHelper
  def sanitize_track(track_name)
    return track_name.gsub(/\(.*?\)/, '')
  end
end