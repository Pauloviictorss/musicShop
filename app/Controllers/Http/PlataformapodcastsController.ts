import Plataformapodcast from "App/Models/Plataformapodcast"


export default class PlataformapodcastController {
    index(){
        return Plataformapodcast.all()
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