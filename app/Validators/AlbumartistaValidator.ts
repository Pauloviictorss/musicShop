import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AlbumartistaValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    artistaId: schema.number([
      rules.required()
    ]),
    albumId: schema.number([
      rules.required()
    ]),
  })

  public messages: CustomMessages = {}
}
