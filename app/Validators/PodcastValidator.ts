import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PodcastValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nome: schema.string([
      //rules.alpha(), não aceita números
      //rules.alphaNum(), aceita somente números
      //rules.email(),
      //rules.minLength(100),
      //rules.range(0, 10)
      rules.maxLength(100),
      rules.unique({table: 'podcasts', column: 'nome'}),
    ]),
    apresentador: schema.string([
      rules.maxLength(50),
      rules.required()
    ]),
    hostId: schema.number([
      rules.required()
    ]),
  })

  public messages: CustomMessages = {}
}
