import * as fs from 'fs'
import * as path from 'path'

export let IN_MEMORY_DB: any

export class InMemoryDataBase {
  async handle (): Promise<void> {
    const csv = fs.readFileSync(path.resolve(__dirname, 'data', 'data.csv'))

    const array = csv.toString().split('\r')

    const headers = array[0].split(',')

    const data = array.slice(1).map((row) => {
      const values = row.split(',')

      return headers.reduce((object, header, index) => {
        object[header] = values[index].trim()
        return object
      }, {})
    })

    const filterHoursOfOpenAndClose = data.map((row: any) => {
      const [openHour, closeHour] = row.OpenHours.split('-')

      return {
        RestaurantName: row.RestaurantName,
        OpenHours: openHour,
        closeHours: closeHour
      }
    })

    IN_MEMORY_DB = filterHoursOfOpenAndClose
  }
}
