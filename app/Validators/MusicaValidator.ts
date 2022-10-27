import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class MusicaValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nome: schema.string([
      rules.maxLength(100),
      rules.required()
    ]),
    duracao: schema.string([
      rules.maxLength(20),
    ]),
    albumId: schema.number([
      rules.required()
    ]),
  })

  public messages: CustomMessages = {}
}
