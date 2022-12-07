import { ConvertDateTimeInSeconds } from '../../src/useCases/helpers/convertDateTimeInSeconds'
import { WithinOpeningHours } from '../../src/useCases/withinOpeningHours'

class ConvertDateTimeInSecondsSpy implements ConvertDateTimeInSeconds {
  seconds: number

  handle (): number {
    return this.seconds
  }
}

const makeSut = (): {
  sut: WithinOpeningHours
  convertDateTimeInSecondsSpy: ConvertDateTimeInSecondsSpy
} => {
  const convertDateTimeInSecondsSpy = new ConvertDateTimeInSecondsSpy()
  const sut = new WithinOpeningHours(convertDateTimeInSecondsSpy)

  return {
    sut,
    convertDateTimeInSecondsSpy
  }
}

describe('withinOpeningHours', () => {
  it('should return true if current time is within opening hours', () => {
    const { sut } = makeSut()

    const inputTime = '10:00'
    const openTime = '09:00'
    const closeTime = '22:00'

    const actual = sut.handle({ inputTime, openTime, closeTime })

    expect(actual).toBe(true)
  })

  it('should return true if input time be into interval of open and close time', () => {
    const { sut, convertDateTimeInSecondsSpy } = makeSut()

    const inputTime = '23:00'
    const openTime = '09:00'
    const closeTime = '22:00'

    jest
      .spyOn(convertDateTimeInSecondsSpy, 'handle')
      .mockReturnValueOnce(21 * 100)
    jest
      .spyOn(convertDateTimeInSecondsSpy, 'handle')
      .mockReturnValueOnce(9 * 100)
    jest
      .spyOn(convertDateTimeInSecondsSpy, 'handle')
      .mockReturnValueOnce(22 * 100)

    const actual = sut.handle({ inputTime, openTime, closeTime })

    expect(actual).toBe(true)
  })

  it('should return false if current time is not within opening hours', () => {
    const { sut, convertDateTimeInSecondsSpy } = makeSut()

    jest.spyOn(convertDateTimeInSecondsSpy, 'handle').mockReturnValueOnce(0)
    jest.spyOn(convertDateTimeInSecondsSpy, 'handle').mockReturnValueOnce(900)
    jest.spyOn(convertDateTimeInSecondsSpy, 'handle').mockReturnValueOnce(222)

    const inputTime = '23:00'
    const openTime = '09:00'
    const closeTime = '22:00'

    const actual = sut.handle({ inputTime, openTime, closeTime })

    expect(actual).toBe(false)
  })
})
