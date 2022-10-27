import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PlaylistValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nome: schema.string([
      rules.maxLength(100),
      rules.required()
    ]),
    user: schema.string([
      rules.maxLength(50),
      rules.required(),
      rules.unique({table: 'playlists', column: 'user'}),
    ]),
  })
  
  public messages: CustomMessages = {}
}
