import Musica from "App/Models/Musica"

export default class MusicasController {
    index(){
        return Musica.all()
    }
    store({request}){
        const dados = request.only(['nome', 'duracao'])

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

        const dados = request.only(['nome', 'duracao'])
        
        musica.merge(dados).save()

        return dados
    }
}