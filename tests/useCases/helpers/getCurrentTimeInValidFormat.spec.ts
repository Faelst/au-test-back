class GetCurrentTimeInValidFormat {
  handle (): string {
    const currentTime: string = new Date().toLocaleTimeString()
    const hours = Number(currentTime.match(/^(\d+)/)?.[1])
    const minutes = Number(currentTime.match(/:(\d+)/)?.[1])
    const AMPM = currentTime.match(/\s(.*)$/)?.[1]

    if (AMPM === 'PM' && hours < 12) {
      return `${hours + 12}:${minutes}`
    }

    if (AMPM === 'AM' && hours === 12) {
      return `00:${minutes}`
    }

    return `${hours}:${minutes}`
  }
}

describe('convertCurrentTimeInLocalFormat', () => {
  it('should return current time in HH:MM format', () => {
    const sut = new GetCurrentTimeInValidFormat()

    const actual = sut.handle()

    expect(actual).toBeTruthy()
  })

  it('should return current time in HH:MM format', () => {
    const sut = new GetCurrentTimeInValidFormat()

    const actual = sut.handle()

    expect(actual).toMatch(/^[0-9]{1,2}:[0-9]{2}$/)
  })
})
