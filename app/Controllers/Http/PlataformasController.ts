import Plataforma from "App/Models/Plataforma"
import PlataformaValidator from "App/Validators/PlataformaValidator"

export default class PlataformasController {
    index({request}){
        const {nome} = request.all()
        const plataforma = Plataforma.query()
                                     .select(['id', 'nome'])
                                     .preload('podcasts')
                                     .preload('artistas')

        if(nome){
            plataforma.where('nome', nome)
        }

        return plataforma
    }
    
    async store({request}){
        const dados = await request.validate(PlataformaValidator)
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