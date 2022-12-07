import { InMemoryDataBase } from '../infra/db/inMemoryDataBase'

const inMemoryDataBase = new InMemoryDataBase()

console.log('Starting server...')
void inMemoryDataBase.handle().then(async () => {
  const { setupApp } = await import('./config/app')
  const app = await setupApp()
  app.listen(3000, () => console.log(`Server running at http://localhost:${3000}`))
})
