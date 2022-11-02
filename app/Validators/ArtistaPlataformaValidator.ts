import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ArtistaPlataformaValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    artistaId: schema.number([
      rules.required(),
      rules.exists({ table: 'artistas', column: 'id' }),
    ]),
    plataformaId: schema.number([
      rules.required(),
      rules.exists({ table: 'plataformas', column: 'id' }),
    ]),
  })

  public messages: CustomMessages = {
    'artistaId.required': 'É necessário informar o campo de ID do Artista!',
    'artistaId.exists': 'Para inserir dados nesse campo, é necessário antes inserir um artista.',

    'plataformaId.required': 'É necessário informar o campo de ID da plataforma!',
    'plataformaId.exists': 'Para inserir dados nesse campo, é necessário antes inserir uma plataforma.',
  }
}
