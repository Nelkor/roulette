import { createCipheriv, createHash } from 'crypto'

import { GameVerification } from './game-types'

const hex = 'hex'

const getKeyAndVector = () => {
  const hash32 = createHash('md5')
    .update(Math.random().toString())
    .digest(hex)

  return [
    hash32.slice(0, 16),
    hash32.slice(16),
  ]
}

export const encrypt = (
  id: number,
  timestamp: number,
  result: number,
): GameVerification => {
  const time = (new Date(timestamp)).toUTCString()

  const [key, vector] = getKeyAndVector()
  const stringified = JSON.stringify({ id, time, result, key, vector })
  const cipher = createCipheriv('aes-128-cbc', key, vector)
  const encrypted = cipher.update(stringified, 'utf8', hex) + cipher.final(hex)
  const hashed = createHash('sha512').update(stringified).digest(hex)

  return {
    stringified,
    encrypted,
    hashed,
    key,
    vector,
  }
}
