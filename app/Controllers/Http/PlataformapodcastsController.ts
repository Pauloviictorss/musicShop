import Plataformapodcast from "App/Models/Plataformapodcast"

export default class PlataformapodcastsController {
    index({request}){

        const {plataformaId, podcastId} = request.all()

        const plataformapodcast = Plataformapodcast.query()
                           .select(['id', 'plataformaId', 'podcastId'])

        if(podcastId){
            plataformapodcast.where('podcastId', podcastId)
        }

        if(plataformaId){
            plataformapodcast.where('plataformaId', plataformaId)
        }

        return plataformapodcast
    }
    store({request}){
        const dados = request.only(['plataformaId', 'podcastId'])

        return Plataformapodcast.create(dados)
    }
    show({request}){
        const id = request.param('id')
        return Plataformapodcast.find(id)
    }
    async destroy({request}){
        const id = request.param('id')
        const plataformapodcast = await Plataformapodcast.findOrFail(id)
        return plataformapodcast.delete()
    }
    async update({request}){
        const id = request.param('id')
        const plataformapodcast = await Plataformapodcast.findOrFail(id)

        const dados = request.only(['plataformaId', 'podcastId'])
        
        plataformapodcast.merge(dados).save()

        return dados
    }
}