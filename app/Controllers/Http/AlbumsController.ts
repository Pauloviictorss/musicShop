import Album from "App/Models/Album"

export default class AlbumsController {
    index(){
        return Album.all()
    }
    store({request}){
        const dados = request.only(['nome', 'artistaId', 'lancamento'])

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

        const dados = request.only(['nome', 'artistaId', 'lancamento'])
        
        album.merge(dados).save()

        return dados
    }
}