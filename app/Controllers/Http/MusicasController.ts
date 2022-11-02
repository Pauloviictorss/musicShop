import Musica from "App/Models/Musica"
import MusicaValidator from "App/Validators/MusicaValidator"

export default class MusicasController {
    index({request}){
        const {nome, albumId} = request.all()
        const musica = Musica.query()
                             .select(['id', 'nome', 'duracao', 'albumId'])
                             .preload('album')
                             .preload('playlists')

        if(nome){
            musica.where('nome', nome)
        } else if(albumId){
            musica.where('albumId', albumId)
        }

        return musica
    }
    
    async store({request}){
        const dados = await request.validate(MusicaValidator)
        return Musica.create(dados)
    }

    show({request}){
        const id = request.param('id')
        return Musica.find(id)
    }

    async destroy({request}){
        const id = request.param('id')
        const musica = await Musica.findOrFail(id)
        return musica.delete()
    }

    async update({request}){
        const id = request.param('id')
        const musica = await Musica.findOrFail(id)
        const dados = request.only(['nome', 'duracao', 'albumId'])
        musica.merge(dados).save()
        return dados
    }
}