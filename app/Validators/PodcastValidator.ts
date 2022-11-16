import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PodcastValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nome: schema.string([
      rules.maxLength(100),
      rules.unique({table: 'podcasts', column: 'nome'}),
      rules.required(),
    ]),
    apresentador: schema.string([
      rules.maxLength(50),
      rules.required()
    ]),
    hostId: schema.number([
      rules.required(),
      rules.exists({ table: 'hosts', column: 'id' }),
    ]),
  })

  public messages: CustomMessages = {
    'nome.maxLength': 'O nome do Podcast deve ter, no máximo, {{options.maxLength }} caracteres.',
    'nome.required': 'O campo nome é obrigatório.',
    'nome.unique': 'Esse Podcast já foi cadastrado, insira um novo Podcast.',

    'apresentador.maxLength': 'O nome do apresentador deve ter, no máximo, {{options.maxLength }} caracteres.',
    'apresentador.required': 'O campo apresentador é obrigatório.',

    'hostId.required': 'É necessário informar o campo de ID do Host!',
    'hostId.exists': 'Para inserir dados nesse campo, é necessário antes inserir um host.',
  }
}
