import { adaptRoute } from '@/main/adapters'
import { makeGetRestaurantsAvailableController } from '@/main/factories'

import { Router } from 'express'

export default (router: Router): void => {
  router.get('/restaurant', adaptRoute(makeGetRestaurantsAvailableController()))
}
