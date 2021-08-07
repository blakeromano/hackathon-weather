import { Router } from "express"
import * as weatherCtrl from "../controllers/weather.js"

export {
  router
}

const router = Router()

router.get('/airPollution', weatherCtrl.airPollution)
router.get('/', weatherCtrl.general)
router.get("/", )