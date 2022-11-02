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
      rules.required(),
      rules.exists({ table: 'albums', column: 'id' }),
    ]),
  })

  public messages: CustomMessages = {
    'nome.maxLength': 'O nome da música deve ter, no máximo, {{options.maxLength }} caracteres.',
    'nome.required': 'O campo nome é obrigatório.',
    
    'duracao.maxLength': 'A duração deve ter, no máximo, {{options.maxLength }} caracteres.',

    'albumId.required': 'É necessário informar o campo de ID do Álbum!',
    'albumId.exists': 'Para inserir dados nesse campo, é necessário antes inserir um álbum.',
  }
}
