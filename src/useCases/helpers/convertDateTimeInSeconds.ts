export class ConvertDateTimeInSeconds {
  handle (time: string): number {
    if (!time.match(/^[0-9]{1,2}:[0-9]{2}$/)) {
      throw new Error('Invalid time format')
    }

    const [hours, minutes] = time.split(':')
    const seconds = Number(hours) * 60 * 60 + Number(minutes) * 60
    return seconds
  }
}
