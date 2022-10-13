import Artista from "App/Models/Artista"

export default class ArtistasController {
    index(){
        return Artista.all()
    }
    store({request}){
        const dados = request.only(['nome', 'dataNascimento'])

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

        const dados = request.only(['nome', 'dataNascimento'])
        
        artista.merge(dados).save()

        return dados
    }
}