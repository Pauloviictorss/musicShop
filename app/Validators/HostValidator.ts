import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class HostValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nome: schema.string([
      rules.unique({table: 'hosts', column: 'nome'}),
      rules.maxLength(100),
      rules.required(),
    ]),
    localizacao: schema.enum(
      ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO', 'DF'] as const
    ),
  })

  public messages: CustomMessages = {
    'nome.maxLength': 'O nome do álbum deve ter, no máximo, {{options.maxLength }} caracteres.',
    'nome.required': 'O campo nome é obrigatório.',
    'nome.unique': 'Esse Host já foi cadastrado, insira um novo Host.',

    'localizacao.enum': 'Essa informação não é válida. Insira a UF do Host. Opções disponíveis:',
  }
}
