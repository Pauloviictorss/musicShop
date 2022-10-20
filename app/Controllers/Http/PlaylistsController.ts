import Playlist from "App/Models/Playlist"

export default class PlaylistsController {
    index({request}){

        const {nome, user} = request.all()

        const playlist = Playlist.query()
                           .select(['id', 'nome', 'user'])

        if(user){
            playlist.where('user', user)
        }

        if(nome){
            playlist.where('nome', nome)
        }

        return playlist
    }
    store({request}){
        const dados = request.only(['nome', 'user'])

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

        const dados = request.only(['nome', 'user'])
        
        playlist.merge(dados).save()

        return dados
    }
}