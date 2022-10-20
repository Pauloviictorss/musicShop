import Playlistmusica from "App/Models/Playlistmusica"


export default class PlaylistmusicasController {
    index(){
        return Playlistmusica.all()
    }
    store({request}){
        const dados = request.only(['playlistId', 'musicaId'])

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