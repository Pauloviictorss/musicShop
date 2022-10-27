import Playlist from "App/Models/Playlist"
import PlaylistValidator from "App/Validators/PlaylistValidator"

export default class PlaylistsController {
    index({request}){

        const {nome, user} = request.all()

        const playlist = Playlist.query()
                           .select(['id', 'nome', 'user'])
                           .preload('musicas')

        if(user){
            playlist.where('user', user)
        }

        if(nome){
            playlist.where('nome', nome)
        }

        return playlist
    }
    
    async store({request}){
        const dados = await request.validate(PlaylistValidator)
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