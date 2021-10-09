import {Express, json} from "express";
import cors from 'cors'

export const middlewaresConfig  = (app: Express) => {
  app.use(cors())
  app.use(json())
  app.use((_req,res,next)=> {res.type('json'); next()})
}