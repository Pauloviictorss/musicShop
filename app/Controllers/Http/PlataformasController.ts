import Plataforma from "App/Models/Plataforma"

export default class DisciplinasController {
    index(){
        return Plataforma.all()
    }
    store({request}){
        const dados = request.only(['nome'])

        return Plataforma.create(dados)
    }
    show({request}){
        const id = request.param('id')
        return Plataforma.find(id)
    }
    async destroy({request}){
        const id = request.param('id')
        const plataforma = await Plataforma.findOrFail(id)
        return plataforma.delete()
    }
    async update({request}){
        const id = request.param('id')
        const plataforma = await Plataforma.findOrFail(id)

        const dados = request.only(['nome'])
        
        plataforma.merge(dados).save()

        return dados
    }
}