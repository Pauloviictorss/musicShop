import Podcast from "App/Models/Podcast"

export default class PodcastsController {
    index({request}){

        const {nome, convidado} = request.all()

        const podcast = Podcast.query()
                         .select(['id', 'nome', 'convidado'])

        if(nome){
            podcast.where('nome', nome)
        }

        if(convidado){
            podcast.where('convidado', convidado)
        }

        return podcast
    }
    store({request}){
        const dados = request.only(['nome', 'duracao', 'convidado'])

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

        const dados = request.only(['nome', 'duracao', 'convidado'])
        
        podcast.merge(dados).save()

        return dados
    }
}