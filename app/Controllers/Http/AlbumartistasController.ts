import Albumartista from "App/Models/Albumartista"

export default class AlbumartistasController {
    index({request}){

        const {albumId, artistaId} = request.all()

        const albumartista = Albumartista.query()
                           .select(['id', 'albumId', 'artistaId'])

        if(artistaId){
            albumartista.where('artistaId', artistaId)
        }

        if(albumId){
            albumartista.where('albumId', albumId)
        }

        return albumartista
    }
    store({request}){
        const dados = request.only(['albumId', 'artistaId'])

        return Albumartista.create(dados)
    }
    show({request}){
        const id = request.param('id')
        return Albumartista.find(id)
    }
    async destroy({request}){
        const id = request.param('id')
        const albumartista = await Albumartista.findOrFail(id)
        return albumartista.delete()
    }
    async update({request}){
        const id = request.param('id')
        const albumartista = await Albumartista.findOrFail(id)

        const dados = request.only(['albumId', 'artistaId'])
        
        albumartista.merge(dados).save()

        return dados
    }
}