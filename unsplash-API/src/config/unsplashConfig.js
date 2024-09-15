import {createApi} from 'unsplash-js'
import fetch from "node-fetch"

export const unsplash = createApi({
    accessKey: process.env.UNSPLASH_ACESS_KEY,
    fetch
})