import { existsSync, mkdirSync } from 'fs'

const getDashedYmd = () => {
  const date = new Date()

  return [
    date.getFullYear(),
    date.getMonth() + 1,
    date.getDate(),
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
