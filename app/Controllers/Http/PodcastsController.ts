import Podcast from "App/Models/Podcast"

export default class DisciplinasController {
    index(){
        return Podcast.all()
    }
    store({request}){
        const dados = request.only(['nome', 'hostId', 'plataformaId'])

        return Podcast.create(dados)
    }
    show({request}){
        const id = request.param('id')
        return Podcast.find(id)
    }
    async destroy({request}){
        const id = request.param('id')
        const podcast = await Podcast.findOrFail(id)
        return podcast.delete()
    }
    async update({request}){
        const id = request.param('id')
        const podcast = await Podcast.findOrFail(id)

        const dados = request.only(['nome', 'hostId', 'plataformaId'])
        
        podcast.merge(dados).save()

        return dados
    }
}