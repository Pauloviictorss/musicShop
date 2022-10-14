import Host from "App/Models/Host"

export default class HostsController {
    index(){
        return Host.all()
    }
    /*index({request}){

        const {nome, cursoId} = request.all()

        const disciplinas = Disciplina.query()
                                     .select(['id', 'nome', 'cursoId'])

        if(cursoId){
            disciplinas.where('cursoId', cursoId)
        }

        if(nome){
            disciplinas.where('nome', nome)
        }

        return disciplinas
    }*/

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