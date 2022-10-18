import HostPodcast from "App/Models/HostPodcast"

export default class HostPodcastsController {
    index(){
        return HostPodcast.all()
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