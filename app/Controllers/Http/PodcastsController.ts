import Podcast from "App/Models/Podcast"
import PodcastValidator from "App/Validators/PodcastValidator"

export default class PodcastsController {
    index({request}){
        const {nome, apresentador} = request.all()
        const podcast = Podcast.query()
                               .select(['id', 'nome', 'apresentador', 'hostId'])
                               .preload('host')
                               .preload('plataformas')

        if(apresentador){
            podcast.where('apresentador', apresentador)
        } else if(nome){
            podcast.where('nome', nome)
        }

        return podcast
    }
    
    async store({request}){
        const dados = await request.validate(PodcastValidator)
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
        const dados = request.only(['nome', 'apresentador', 'hostId'])
        podcast.merge(dados).save()
        return dados
    }
}