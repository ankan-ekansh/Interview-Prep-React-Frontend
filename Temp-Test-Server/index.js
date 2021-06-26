const express = require('express');
const app = express();
const PORT = 8888;
const cors = require('cors');
const mongoose = require('mongoose');
mongoose.connect('DB CONNECTION STRING', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const TopicSchema = new mongoose.Schema({
    level1: {
      type: [Object]
    },
    level2: {
      type: [Object]
    },
    level3: {
      type: [Object]
    },
    levels: [String]
  });
const Topic = mongoose.model("Topic",TopicSchema);

app.use(cors());

app.get('/api/topics', async (req, res) => {
    const data = await Topic.find({});
    res.status(200).send(data);
}) 

app.listen(PORT, () => {
    console.log("Listening on port " + PORT);
})