import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PlaylistValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nome: schema.string([
      rules.maxLength(100),
      rules.required(),
    ]),
    user: schema.string([
      rules.maxLength(20),
      rules.required(),
      rules.unique({table: 'playlists', column: 'user'}),
    ]),
  })
  
  public messages: CustomMessages = {
    'nome.maxLength': 'O nome da playlist deve ter, no máximo, {{options.maxLength }} caracteres.',
    'nome.required': 'O campo nome é obrigatório.',

    'user.maxLength': 'O seu nome de usuário deve ter, no máximo, {{options.maxLength }} caracteres.',
    'user.required': 'O campo user é obrigatório.',
    'user.unique': 'Esse nome de usuário já existe, insira um novo user.',
  }
}
