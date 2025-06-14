require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const articleRoutes = require('./routes/article');
const categoryRoutes = require('./routes/category');
mongoose.connect(process.env.CONNECTION_STRING);

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use('/articles', articleRoutes);
app.use('/categories', categoryRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
