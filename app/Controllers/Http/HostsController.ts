import Host from "App/Models/Host"

export default class HostsController {
    index({request}){

        const {nome, localizacao} = request.all()

        const host = Host.query()
                         .select(['id', 'nome', 'localizacao'])
                         .preload('podcasts')

        if(localizacao){
            host.where('localizacao', localizacao)
        }

        if(nome){
            host.where('nome', nome)
        }

        return host
    }
    store({request}){
        const dados = request.only(['nome', 'localizacao'])

        return Host.create(dados)
    }
    show({request}){
        const id = request.param('id')
        return Host.find(id)
    }
    async destroy({request}){
        const id = request.param('id')
        const host = await Host.findOrFail(id)
        return host.delete()
    }
    async update({request}){
        const id = request.param('id')
        const host = await Host.findOrFail(id)

        const dados = request.only(['nome', 'localizacao'])
        
        host.merge(dados).save()

        return dados
    }
}