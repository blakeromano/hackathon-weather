import { Router } from "express"
import * as weatherCtrl from "../controllers/weather.js"

const router = Router()

router.get("/", weatherCtrl.random)
router.get('/airPollution', weatherCtrl.airPollution)
router.post('/', weatherCtrl.general)

export {
  router
}