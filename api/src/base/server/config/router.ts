import {Express, Router} from 'express'
import {readdirSync} from 'fs'
import { join } from 'path'

export const routerConfig = (app: Express) => {

const router = Router()
const callDefault = async (file: string): Promise<void> => (await import(`../routes/${file}`)).default(router) 

readdirSync(join(__dirname, '../routes')) //ler o nome dos arquivos na pasta route
  .filter(file => !file.endsWith('.map')) // filtra os que tiverem com o final .map
    .map(async file => callDefault(file)) // import como default os arquivos e passa router
app.use('/', router)
}

