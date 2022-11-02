import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AlbumartistaValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    artistaId: schema.number([
      rules.required(),
      rules.exists({ table: 'artistas', column: 'id' }),
    ]),
    albumId: schema.number([
      rules.required(),
      rules.exists({ table: 'albums', column: 'id' }),
    ]),
  })

  public messages: CustomMessages = {
    'artistaId.required': 'É necessário informar o campo de ID do Artista!',
    'artistaId.exists': 'Para inserir dados nesse campo, é necessário antes inserir um artista.',

    'albumId.required': 'É necessário informar o campo de ID do Álbum!',
    'albumId.exists': 'Para inserir dados nesse campo, é necessário antes inserir um álbum.',
  }
}
