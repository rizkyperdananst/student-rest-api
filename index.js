const express = require('express');
const cors = require('cors');
const StudentRoute = require('./routers/StudentRouter');
const server = require('./config/database');
const port = 3000;

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/testing', (req, res) => {
    res.json({
        message: 'Hello World',
        success: true,
        code: 200,
        data: {
            name: 'Rizky',
            age: 20,
            address: 'Medan',
            hobbies: ['Coding', 'Gaming'],
            isMarried: false,

        }
    });
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(StudentRoute);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});