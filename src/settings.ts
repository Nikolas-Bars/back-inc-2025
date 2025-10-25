import {config} from 'dotenv'
config()

export const SETTINGS = {
    // благодаря этой настройке получаем доступ к env файлу
    PORT: process.env.PORT || 3004,
    PATH: {
        VIDEOS: '/videos'
    }
}
