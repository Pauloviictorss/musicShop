import Album from "App/Models/Album"
import AlbumValidator from "App/Validators/AlbumValidator"

export default class AlbumsController {
    index({request}){

        const {nome, lancamento} = request.all()

        const album = Album.query()
                           .select(['id', 'nome', 'lancamento'])
                           .preload('artistas')
                           .preload('musicas')

        if(lancamento){
            album.where('lancamento', lancamento)
        }

        if(nome){
            album.where('nome', nome)
        }

        return album
    }

    async store({request}){
        const dados = await request.validate(AlbumValidator)
        return Album.create(dados)
    }

    show({request}){
        const id = request.param('id')
        return Album.find(id)
    }
    async destroy({request}){
        const id = request.param('id')
        const album = await Album.findOrFail(id)
        return album.delete()
    }
    async update({request}){
        const id = request.param('id')
        const album = await Album.findOrFail(id)

        const dados = request.only(['nome', 'lancamento'])
        
        album.merge(dados).save()

        return dados
    }
}