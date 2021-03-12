import { existsSync, mkdirSync } from 'fs'

const getDashedYmd = () => {
  const date = new Date()

  return [
    date.getUTCFullYear(),
    date.getUTCMonth() + 1,
    date.getUTCDate(),
  ]
    .map(item => item.toString().padStart(2, '0'))
    .join('-')
}

const logDirName = 'log'

export const log = (): void => {
  if (!existsSync(logDirName)) {
    mkdirSync(logDirName)
  }

  const dateDirName = `${logDirName}/${getDashedYmd()}`

  if (!existsSync(dateDirName)) {
    mkdirSync(dateDirName)
  }
}
