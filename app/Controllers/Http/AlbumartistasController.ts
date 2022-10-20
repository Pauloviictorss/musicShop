import Albumartista from "App/Models/Albumartista"


export default class AlbumartistasController {
    index(){
        return Albumartista.all()
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