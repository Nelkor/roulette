type SpinResult = {
  id: number
  time: number
  value: number
  key: string
  vector: string
}

export type Spin = {
  result: SpinResult
  stringified: string
  encrypted: string
  hashed: string
}
