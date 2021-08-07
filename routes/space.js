import { Router } from "express"
import * as spaceCtrl from "../controllers/space.js"

const router = Router()

router.get('/apod', spaceCtrl.apod)
router.post('/photos', spaceCtrl.photos)

export {
  router
}
