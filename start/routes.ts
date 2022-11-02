import Route from '@ioc:Adonis/Core/Route'

Route.resource('/host', 'HostsController').apiOnly()
Route.resource('/plataforma', 'PlataformasController').apiOnly()
Route.resource('/podcast', 'PodcastsController').apiOnly()
Route.resource('/artista', 'ArtistasController').apiOnly()
Route.resource('/album', 'AlbumsController').apiOnly()
Route.resource('/musica', 'MusicasController').apiOnly()
Route.resource('/playlist', 'PlaylistsController').apiOnly()
Route.resource('/playlistmusica', 'PlaylistmusicasController').apiOnly()
Route.resource('/plataformapodcast', 'PlataformapodcastsController').apiOnly()
Route.resource('/artistaplataforma', 'ArtistaplataformasController').apiOnly()
Route.resource('/albumartista', 'AlbumartistasController').apiOnly()