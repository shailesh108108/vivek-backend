import {Router} from "express"
import { registerUser } from "../controllers/user.controller.js"
import {upload} from "../middlewares/multer.middleware.js"

const router = Router()

// we can single if we want a single file  upload.single() but we want multiple multiple files
// so we use upload.array() but here all fields musat be same like text then on text
// but we are taking image for avatar and text fore username... so we 
// use upload.fields() 

router.route("/register").post(
    upload.fields([
        {
            name : "avatar",
            maxCount : 1
        },
        {
            name: "coverImage",
            maxCount : 1
        }
    ]),
    registerUser)


export default router