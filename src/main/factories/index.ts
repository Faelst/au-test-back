import { GetRestaurantsAvailableController } from '@/presentation/controllers/getRestaurantsAvailableController'
import { Controller } from '@/presentation/protocols'
import { IN_MEMORY_DB } from '@/infra/db/inMemoryDataBase'
import { WithinOpeningHours } from '@/useCases/withinOpeningHours'
import { ConvertDateTimeInSeconds } from '@/useCases/helpers/convertDateTimeInSeconds'

export const makeGetRestaurantsAvailableController = (): Controller => {
  const inMemoryDataBase = IN_MEMORY_DB
  const convertDateTimeInSeconds = new ConvertDateTimeInSeconds()
  const withinOpeningHours = new WithinOpeningHours(convertDateTimeInSeconds)

  return new GetRestaurantsAvailableController(withinOpeningHours, inMemoryDataBase)
}
