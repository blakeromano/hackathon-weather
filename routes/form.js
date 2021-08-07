import { Router } from 'express'
import * as formCtrl from "../controllers/form.js"

export {
  router
}

const router = Router()

router.get("/", formCtrl.formIndex)
router.post('/', formCtrl.formPost)
router.delete('/:id', formCtrl.formDelete)