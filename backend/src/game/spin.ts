import { createCipheriv, createHash } from 'crypto'

import { Spin } from './game-types'

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

export const createSpin = (id: number, time: number): Spin => {
  const [key, vector] = getKeyAndVector()

  const result = {
    id,
    time,
    value: Math.random(),
    key,
    vector,
  }

  const stringified = JSON.stringify(result)
  const cipher = createCipheriv('aes-128-cbc', key, vector)

  const encrypted = cipher.update(stringified, 'utf8', hex)
    + cipher.final(hex)

  const hashed = createHash('sha512')
    .update(stringified)
    .digest(hex)

  return {
    result,
    stringified,
    encrypted,
    hashed,
  }
}
