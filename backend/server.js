const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const Alert = require('./models/Alert');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get('/', (req, res) => res.send('SmartCampus API running'));

// Alerts
app.get('/alerts', async (req, res) => {
  const alerts = await Alert.find();
  res.json(alerts);
});

app.post('/alerts', async (req, res) => {
  const newAlert = new Alert(req.body);
  await newAlert.save();
  res.json(newAlert);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
