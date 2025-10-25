import {SETTINGS} from "../src/settings";
import request from "supertest";
import { app } from "../src/app";
import {db, setVideoDB, VideoType} from "../src/db/db";
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
        setVideoDB(dataset)
        const res = await request(app).get(SETTINGS.PATH.VIDEOS).expect(200)
        expect(res.body.length).toBe(2);
        expect(res.body[1]).toEqual(video1)
    })
    it ('should return video by video id', async () => {
        const res = await request(app).get('/videos/1').expect(200)
        expect(res.body).toEqual(db.videos[0])
    })
    it("should create video; POST /videos", async () => {
        const newVideo: VideoType = {
            id: 3,
            title: 'video3',
            author: 'Loh3',
            canBeDownloaded: false,
            minAgeRestriction: false,
            createdAt: '01.09.2024 16:53:00',
            publicationDate: '01.09.2024 16:53:00',
            availableResolutions: ['p000']
        };

        await request(app)
            .post("/videos")
            .send(newVideo)
            .expect(201);
        const res = await request(app).get(SETTINGS.PATH.VIDEOS).expect(200)
        console.log(res.body)
    });
    it("should update video; PUT /videos", async () => {
        const updateData = {
            title: 'video7',
            author: 'Loh7',
            canBeDownloaded: false,
            minAgeRestriction: false,
            createdAt: '01.09.2024 16:53:07',
            publicationDate: '01.09.2024 16:53:07',
            availableResolutions: ['p777']
        };

        await request(app)
            .put("/videos/1")
            .send(updateData)
            .expect(200);
        const res = await request(app).get(SETTINGS.PATH.VIDEOS).expect(200)
        console.log(res.body)
    });
})
