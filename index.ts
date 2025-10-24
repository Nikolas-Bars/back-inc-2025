// yarn tsc && yarn nodemon --inspect dist/index.js- запуск с отладчиком
import express from 'express';
const app = express();
const port = 3000;
const JsonMiddleware = express.json();
app.use(JsonMiddleware)

app.get('/', (req, res) => {
    res.json({message: 1000});
})
app.get('/samurais', (req, res) => {
    res.send('Hello samuraiswwwwwdwd!www    ');
})
app.post('/samurais', (req, res) => {
    res.send('We created samurai!');
})
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})
