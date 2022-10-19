import Artista from "App/Models/Artista"

export default class ArtistasController {
    index({request}){

        const {nome, albumId} = request.all()

        const artista = Artista.query()
                          .select(['id', 'nome', 'albumId'])

        if(albumId){
            artista.where('albumId', albumId)
        }

        if(nome){
            artista.where('nome', nome)
        }

        return artista
    }
    store({request}){
        const dados = request.only(['nome', 'dataNascimento', 'albumId'])

        return Artista.create(dados)
    }
    show({request}){
        const id = request.param('id')
        return Artista.find(id)
    }
    async destroy({request}){
        const id = request.param('id')
        const artista = await Artista.findOrFail(id)
        return artista.delete()
    }
    async update({request}){
        const id = request.param('id')
        const artista = await Artista.findOrFail(id)

        const dados = request.only(['nome', 'dataNascimento', 'albumId'])
        
        artista.merge(dados).save()

        return dados
    }
}