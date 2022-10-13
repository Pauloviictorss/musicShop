import Playlist from "App/Models/Playlist"

export default class PlaylistsController {
    index(){
        return Playlist.all()
    }
    store({request}){
        const dados = request.only(['nome', 'musicaId'])

        return Playlist.create(dados)
    }
    show({request}){
        const id = request.param('id')
        return Playlist.find(id)
    }
    async destroy({request}){
        const id = request.param('id')
        const playlist = await Playlist.findOrFail(id)
        return playlist.delete()
    }
    async update({request}){
        const id = request.param('id')
        const playlist = await Playlist.findOrFail(id)

        const dados = request.only(['nome', 'musicaId'])
        
        playlist.merge(dados).save()

        return dados
    }
}