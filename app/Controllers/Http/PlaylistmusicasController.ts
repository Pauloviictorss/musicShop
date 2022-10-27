import Playlistmusica from "App/Models/Playlistmusica"
import PlaylistmusicaValidator from "App/Validators/PlaylistmusicaValidator"

export default class PlaylistmusicasController {
    index({request}){

        const {playlistId, musicaId} = request.all()

        const playlistmusica = Playlistmusica.query()
                                             .select(['id', 'playlistId', 'musicaId'])

        if(playlistId){
            playlistmusica.where('playlistId', playlistId)
        }

        if(musicaId){
            playlistmusica.where('musicaId', musicaId)
        }

        return playlistmusica
    }

    async store({request}){
        const dados = await request.validate(PlaylistmusicaValidator)
        return Playlistmusica.create(dados)
    }

    show({request}){
        const id = request.param('id')
        return Playlistmusica.find(id)
    }
    async destroy({request}){
        const id = request.param('id')
        const playlistmusica = await Playlistmusica.findOrFail(id)
        return playlistmusica.delete()
    }
    async update({request}){
        const id = request.param('id')
        const playlistmusica = await Playlistmusica.findOrFail(id)

        const dados = request.only(['playlistId', 'musicaId'])
        
        playlistmusica.merge(dados).save()

        return dados
    }
}