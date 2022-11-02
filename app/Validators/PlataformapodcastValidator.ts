import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PlataformapodcastValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    plataformaId: schema.number([
      rules.required(),
      rules.exists({ table: 'plataformas', column: 'id' }),
    ]),
    podcastId: schema.number([
      rules.required(),
      rules.exists({ table: 'podcasts', column: 'id' }),
    ]),
  })

  public messages: CustomMessages = {
    'plataformaId.required': 'É necessário informar o campo de ID da Plataforma!',
    'plataformaId.exists': 'Para inserir dados nesse campo, é necessário antes inserir uma plataforma.',

    'podcastId.required': 'É necessário informar o campo de ID do Podcast!',
    'podcastId.exists': 'Para inserir dados nesse campo, é necessário antes inserir um podcast.',
  }
}
