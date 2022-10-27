import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ArtistaPlataformaValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    artistaId: schema.number([
      rules.required()
    ]),
    plataformaId: schema.number([
      rules.required()
    ]),
  })

  public messages: CustomMessages = {}
}
