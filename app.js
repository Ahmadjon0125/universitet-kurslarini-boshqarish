const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();


const app = express();
app.use(bodyParser.json());

const coursesRouter = require('./routes/courses');
const studentsRouter = require('./routes/students');


app.use(coursesRouter );
app.use(studentsRouter );

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));