import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PlataformaValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nome: schema.string([
      rules.minLength(1),
      rules.maxLength(50),
      rules.required(),
      rules.unique({table: 'plataformas', column: 'nome'}),
    ]),
  })

  public messages: CustomMessages = {}
}
