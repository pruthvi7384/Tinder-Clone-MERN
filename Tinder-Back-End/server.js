import express from 'express';
import mongoose from 'mongoose';
import Cards from './dbCards.js';
import Cors from "cors";

// App config

const app = express();
const port = process.env.PORT || 8001;
const connection_url = `mongodb+srv://admin:fbubelpsq3On8glO@cluster0.t0wtq.mongodb.net/tinderdb?retryWrites=true&w=majority`;

// Middlewares

app.use(express.json());
app.use(Cors());

// DB Config

mongoose.connect(connection_url, { 
    useNewUrlParser: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// API Endpoint

app.get("/", (req, res) => {
    res.status(200).send("Hello Clever Programmer")
});

app.post("/tinder/card", (req, res) => {
    const dbCard = req.body;
  
    Cards.create(dbCard, (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(201).send(data);
      }
    });
  });

  app.get("/tinder/card", (req, res) => {
    Cards.find((err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(data);
      }
    });
  });

// Listener

app.listen(port, () => {
    console.log(`Server has started: ${port}`);
});