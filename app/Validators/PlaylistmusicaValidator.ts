import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PlaylistmusicaValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    playlistId: schema.number([
      rules.required()
    ]),
    musicaId: schema.number([
      rules.required()
    ]),
  })

  public messages: CustomMessages = {}
}
