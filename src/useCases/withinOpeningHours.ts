import { ConvertDateTimeInSeconds } from './helpers/convertDateTimeInSeconds'

export class WithinOpeningHours implements WithinOpeningHours {
  convertDateTimeInSeconds: ConvertDateTimeInSeconds

  constructor (convertDateTimeInSeconds: ConvertDateTimeInSeconds) {
    this.convertDateTimeInSeconds = convertDateTimeInSeconds
  }

  handle ({
    inputTime,
    openTime,
    closeTime
  }: {
    inputTime: string
    openTime: string
    closeTime: string
  }): boolean {
    const inputTimeInSeconds = this.convertDateTimeInSeconds.handle(inputTime)
    const openTimeInSeconds = this.convertDateTimeInSeconds.handle(openTime)
    const closeTimeInSeconds = this.convertDateTimeInSeconds.handle(closeTime)

    const intoOpenHours =
      inputTimeInSeconds < openTimeInSeconds ||
      inputTimeInSeconds > closeTimeInSeconds

    return !intoOpenHours
  }
}
