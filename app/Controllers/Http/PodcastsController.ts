import Podcast from "App/Models/Podcast"

export default class PodcastsController {
    index({request}){

        const {nome, convidado} = request.all()

        const podcast = Podcast.query()
                               .select(['id', 'nome', 'convidado', 'duracao', 'hostId'])

        if(convidado){
            podcast.where('convidado', convidado)
        }

        if(nome){
            podcast.where('nome', nome)
        }

        return podcast
    }
    store({request}){
        const dados = request.only(['nome', 'convidado', 'duracao', 'hostId'])

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

        const dados = request.only(['nome', 'convidado', 'duracao', 'hostId'])
        
        podcast.merge(dados).save()

        return dados
    }
}