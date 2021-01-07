module TracksHelper
  def display_top_tracks(tracks)
    tracks_html = ''
    tracks&.each_with_index do |track, index|
      tracks_html += "<p>#{index+1}. #{track.artists.collect(&:name).join("', ")} - #{track.name}<p>"
    end
    return tracks_html.html_safe
  end
end