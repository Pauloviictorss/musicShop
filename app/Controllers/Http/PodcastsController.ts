import Podcast from "App/Models/Podcast"

export default class PodcastsController {
    index({request}){

        const {nome} = request.all()

        const podcast = Podcast.query()
                         .select(['id', 'nome'])

        if(nome){
            podcast.where('nome', nome)
        }

        return podcast
    }
    store({request}){
        const dados = request.only(['nome'])

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

        const dados = request.only(['nome'])
        
        podcast.merge(dados).save()

        return dados
    }
}