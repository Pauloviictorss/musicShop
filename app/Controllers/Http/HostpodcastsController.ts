import HostPodcast from "App/Models/HostPodcast"

export default class HostPodcastsController {
    index({request}){

        const {artistaId, plataformaId} = request.all()

        const album = HostPodcast.query()
                          .select(['id', 'artistaId', 'plataformaId'])

        if(artistaId){
            album.where('artistaId', artistaId)
        }

        if(plataformaId){
            album.where('plataformaId', plataformaId)
        }

        return album
    }
    store({request}){
        const dados = request.only(['artistaId', 'plataformaId'])

        return HostPodcast.create(dados)
    }
    show({request}){
        const id = request.param('id')
        return HostPodcast.find(id)
    }
    async destroy({request}){
        const id = request.param('id')
        const hostpodcast = await HostPodcast.findOrFail(id)
        return hostpodcast.delete()
    }
    async update({request}){
        const id = request.param('id')
        const hostpodcast = await HostPodcast.findOrFail(id)

        const dados = request.only(['artistaId', 'plataformaId'])
        
        hostpodcast.merge(dados).save()

        return dados
    }
}