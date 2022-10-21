import Plataforma from "App/Models/Plataforma"

export default class PlataformasController {
    index({request}){

        const {nome} = request.all()

        const plataforma = Plataforma.query()
                                     .select(['id', 'nome'])
                                     .preload('plataformapodcasts')
                                     .preload('artistaplataformas')

        if(nome){
            plataforma.where('nome', nome)
        }

        return plataforma
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