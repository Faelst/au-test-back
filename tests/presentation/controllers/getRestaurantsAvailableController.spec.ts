
import { WithinOpeningHours } from '@/domain/usecases/withinOpeningHours'
import { GetRestaurantsAvailableController } from '@/presentation/controllers/getRestaurantsAvailableController'

class WithinOpeningHoursSpy implements WithinOpeningHours {
  params: WithinOpeningHours.Params
  result = true

  handle (params: WithinOpeningHours.Params): WithinOpeningHours.Result {
    this.params = params
    return this.result
  }
}

const mockRequest = (time): GetRestaurantsAvailableController.Request => ({
  time
})

const makeSut = (): {
  sut: GetRestaurantsAvailableController
  withinOpeningHoursSpy: WithinOpeningHoursSpy
} => {
  const inMemoryDatabase = [
    {
      RestaurantName: 'Restaurant 1',
      OpenHours: '10:00',
      closeHours: '12:00'
    },
    {
      RestaurantName: 'Restaurant 2',
      OpenHours: '13:00',
      closeHours: '14:00'
    }
  ]
  const withinOpeningHoursSpy = new WithinOpeningHoursSpy()
  const sut = new GetRestaurantsAvailableController(withinOpeningHoursSpy, inMemoryDatabase)

  return {
    sut,
    withinOpeningHoursSpy
  }
}

describe('getRestauratsAvaiblesController', () => {
  it('should return 200 on success', async () => {
    const { sut } = makeSut()
    const request = mockRequest('11:00')

    const httpResponse = await sut.handle(request)

    expect(httpResponse.statusCode).toBe(200)
  })

  it('should return available restaurants', async () => {
    const { sut, withinOpeningHoursSpy } = makeSut()
    const request = mockRequest('13:30')
    withinOpeningHoursSpy.result = false

    jest.spyOn(withinOpeningHoursSpy, 'handle').mockReturnValueOnce(true)

    const httpResponse = await sut.handle(request)

    expect(httpResponse.body).toEqual([
      {
        RestaurantName: 'Restaurant 1',
        OpenHours: '10:00',
        closeHours: '12:00'
      }
    ])
  })

  it('should return any one restaurant', async () => {
    const { sut, withinOpeningHoursSpy } = makeSut()
    const request = mockRequest('13:30')
    withinOpeningHoursSpy.result = false

    const httpResponse = await sut.handle(request)

    expect(httpResponse.body).toEqual([])
  })
})
