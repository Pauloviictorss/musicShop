import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.get('/rota1', async () => {
  return { rota: 'Rota 1' }
})

Route.resource('/host', 'HostsController').apiOnly()
Route.resource('/plataforma', 'PlataformasController').apiOnly()
Route.resource('/podcast', 'PodcastsController').apiOnly()
Route.resource('/artista', 'ArtistasController').apiOnly()