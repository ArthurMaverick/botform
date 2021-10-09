import express from 'express'
import { middlewaresConfig } from './middlewares'
import {routerConfig} from './router'

const server = express()
middlewaresConfig(server)
routerConfig(server)
export {server}