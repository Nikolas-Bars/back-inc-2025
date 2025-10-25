import {SETTINGS} from "../src/settings";
import request from "supertest";
import { app } from "../src/app";
import {setDB} from "../src/db/db";
import {dataset, video1} from "../src/db/dataset";

describe('videos', () => {
    beforeAll(async () => {
        // blabla
    })
    it ('should return an empty array of videos', async () => {
        const res = await request(app).get(SETTINGS.PATH.VIDEOS).expect(200)
        console.log(res.body)
    })
    it ('should return not empty array of videos', async () => {
        setDB(dataset)
        const res = await request(app).get(SETTINGS.PATH.VIDEOS).expect(200)
        expect(res.body.length).toBe(1);
        expect(res.body[0]).toEqual(video1)
        console.log('res.body[0]', res.body[0])
    })
})
