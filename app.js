const express = require('express');
const mongoose = require('mongoose');
const categoryRoutes = require('./src/routes/categoryRoutes');

const app = express();
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb+srv://bhandaridheere:9878249693@cluster0.kbjsfkh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));

// Use the category routes
app.use('/api', categoryRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
