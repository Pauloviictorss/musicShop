import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PlaylistmusicaValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    playlistId: schema.number([
      rules.required(),
      rules.exists({ table: 'playlists', column: 'id' }),
    ]),
    musicaId: schema.number([
      rules.required(),
      rules.exists({ table: 'musicas', column: 'id' }),
    ]),
  })

  public messages: CustomMessages = {
    'playlistId.required': 'É necessário informar o campo de ID da Playlist!',
    'playlistId.exists': 'Para inserir dados nesse campo, é necessário antes inserir uma playlist.',
    
    'musicaId.required': 'É necessário informar o campo de ID da Música!',
    'musicaId.exists': 'Para inserir dados nesse campo, é necessário antes inserir uma musica.',
  }
}
