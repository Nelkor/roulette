const minute = 1e3 * 60

export const ceilTime = (time: number): number =>
  Math.ceil(time / minute) * minute
