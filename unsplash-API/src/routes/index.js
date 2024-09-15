import express from 'express'
import {unsplash} from '../config/unsplashConfig.js'
const router = express.Router()

router.get("/", (req,res) => {
    return res.status(200).send("hellow word")
})

router.get("/img", async (req,res) => {
    try {
        const request = await unsplash.photos.getRandom({
            query: 'dog'
        })

        const body = {
            urlImg: request.response.urls.raw,
            author: {
                name: request.response.user.name,
                instagram: request.response.user.instagram_username
            }
        }

        return res.status(200).json({results: body})
    } catch (error) {
        console.log(error)
        return res.status(500).json({error})
    }
})

export default router