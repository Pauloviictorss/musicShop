import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class HostValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nome: schema.string([
      rules.unique({table: 'hosts', column: 'nome'}),
    ]),
    localizacao: schema.string([
      rules.maxLength(2),
      rules.minLength(2)
    ]),
  })

  public messages: CustomMessages = {}
}
