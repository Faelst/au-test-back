import { Controller, HttpResponse } from '@/presentation/protocols'
import { WithinOpeningHours } from '@/domain/usecases/withinOpeningHours'

export class GetRestaurantsAvailableController implements Controller {
  constructor (
    private readonly withinOpeningHours: WithinOpeningHours,
    private readonly inMemoryDatabase: Array<{
      RestaurantName: string
      OpenHours: string
      closeHours: string
    }>
  ) {}

  async handle (request: GetRestaurantsAvailableController.Request): Promise<HttpResponse> {
    const { time } = request

    const availableRestaurants = this.inMemoryDatabase.filter(restaurant => {
      return this.withinOpeningHours.handle({
        inputTime: time,
        openTime: restaurant.OpenHours,
        closeTime: restaurant.closeHours
      })
    })

    return {
      statusCode: 200,
      body: availableRestaurants
    }
  }
}

export namespace GetRestaurantsAvailableController {
  export type Request = {
    time: string
  }
}
