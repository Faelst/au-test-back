import { ConvertDateTimeInSeconds } from '../../../src/useCases/helpers/convertDateTimeInSeconds'

const makeSut = (): ConvertDateTimeInSeconds => {
  const sut = new ConvertDateTimeInSeconds()
  return sut
}

describe('convertDateTimeInSeconds', () => {
  it('should convert hours to seconds', () => {
    const time = '11:00'
    const expected = 39600
    const sut = makeSut()

    const actual = sut.handle(time)

    expect(actual).toBe(expected)
  })

  it('should convert hours to seconds', () => {
    const time = '11:30'
    const expected = 41400
    const sut = makeSut()

    const actual = sut.handle(time)

    expect(actual).toBe(expected)
  })

  it('should throw if time is not in the correct format', () => {
    const time = '11:30:00'
    const sut = makeSut()

    expect(() => sut.handle(time)).toThrow()
  })

  it('should convert current time to seconds', () => {
    const time = new Date()
      .toLocaleTimeString()
      .split(':')
      .slice(0, 2)
      .join(':')

    const sut = makeSut()

    const actual = sut.handle(time)

    expect(actual).toBeTruthy()
  })
})
