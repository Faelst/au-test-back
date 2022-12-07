import {
  InMemoryDataBase,
  IN_MEMORY_DB
} from '../../../src/infra/db/inMemoryDataBase'

describe('InMemoryDataBase', () => {
  it('should return data from csv file', async () => {
    const sut = new InMemoryDataBase()

    await sut.handle()

    expect(IN_MEMORY_DB[0]).toEqual({
      RestaurantName: 'Kushi Tsuru',
      OpenHours: '11:30',
      closeHours: '21:00'
    })
  })
})
