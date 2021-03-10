const minute = 1e3 * 60

export const startOfNextMinute = (time: number): number =>
  Math.ceil(time / minute) * minute
