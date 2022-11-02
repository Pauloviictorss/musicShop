import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AlbumValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nome: schema.string([
      rules.maxLength(100),
      rules.required(),
    ]),
    lancamento: schema.date({
      format: 'dd-MM-yyyy',
    }, [
      rules.required(),
      rules.before('today')
    ]),
  })

  public messages: CustomMessages = {
    'nome.maxLength': 'O nome do álbum deve ter, no máximo, {{options.maxLength }} caracteres.',
    'nome.required': 'O campo nome é obrigatório.',

    'lancamento.required': 'O campo lançamento é obrigatório.',
    'lancamento.before': 'A data de lançamento deve ser menor do que o dia atual.',
    'lancamento.format': 'O formato de data é dd-mm-yyyy.',
  }
}
