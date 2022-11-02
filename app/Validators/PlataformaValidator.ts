import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PlataformaValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nome: schema.string([
      rules.maxLength(50),
      rules.required(),
      rules.unique({table: 'plataformas', column: 'nome'}),
    ]),
  })

  public messages: CustomMessages = {
    'nome.maxLength': 'O nome da plataforma deve ter, no máximo, {{options.maxLength }} caracteres.',
    'nome.required': 'O campo nome é obrigatório.',
    'nome.unique': 'Essa Platafomra já foi cadastrada, insira uma nova Plataforma.',
  }
}
