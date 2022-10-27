import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PlataformapodcastValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    plataformaId: schema.number([
      rules.required()
    ]),
    podcastId: schema.number([
      rules.required()
    ]),
  })

  public messages: CustomMessages = {}
}
