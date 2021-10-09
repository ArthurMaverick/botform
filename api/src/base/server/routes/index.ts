import { Router } from "express";

export default (route: Router) => {
  route.get('/?', (req, res) => {
    res.json({message: req.query.name})
  })
    
  
}