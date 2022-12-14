import Artistaplataforma from "App/Models/Artistaplataforma"
import ArtistaPlataformaValidator from "App/Validators/ArtistaPlataformaValidator"

export default class ArtistaplataformasController {
    index({request}){
        const {artistaId, plataformaId} = request.all()
        const artistaplataforma = Artistaplataforma.query()
                                                   .select(['id', 'artistaId', 'plataformaId'])

        if(artistaId){
            artistaplataforma.where('artistaId', artistaId)
        } else if(plataformaId){
            artistaplataforma.where('plataformaId', plataformaId)
        }

        return artistaplataforma
    }
    
    async store({request}){
        const dados = await request.validate(ArtistaPlataformaValidator)
        return Artistaplataforma.create(dados)
    }

    show({request}){
        const id = request.param('id')
        return Artistaplataforma.find(id)
    }

    async destroy({request}){
        const id = request.param('id')
        const artistaplataforma = await Artistaplataforma.findOrFail(id)
        return artistaplataforma.delete()
    }

    async update({request}){
        const id = request.param('id')
        const artistaplataforma = await Artistaplataforma.findOrFail(id)
        const dados = request.only(['artistaId', 'plataformaId'])
        artistaplataforma.merge(dados).save()
        return dados
    }
}