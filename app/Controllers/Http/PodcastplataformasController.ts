import Podcastplataforma from "App/Models/Podcastplataforma"

export default class PodcastplataformasController {
    index(){
        return Podcastplataforma.all()
    }
    store({request}){
        const dados = request.only(['podcastId', 'plataformaId'])

        return Podcastplataforma.create(dados)
    }
    show({request}){
        const id = request.param('id')
        return Podcastplataforma.find(id)
    }
    async destroy({request}){
        const id = request.param('id')
        const podcastplataforma = await Podcastplataforma.findOrFail(id)
        return podcastplataforma.delete()
    }
    async update({request}){
        const id = request.param('id')
        const podcastplataforma = await Podcastplataforma.findOrFail(id)

        const dados = request.only(['podcastId', 'plataformaId'])
        
        podcastplataforma.merge(dados).save()

        return dados
    }
}