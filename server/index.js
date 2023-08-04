const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, addFortune, changeFortune, removeFortune, getAllFortunes, deleteAllFortunes } = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune)
app.post("/api/fortune", addFortune)
app.put("/api/fortune/:fortune", changeFortune)
app.delete("/api/fortune/:fortune", removeFortune)
app.delete("/api/fortune/", deleteAllFortunes)
app.get("/api/fortune-all", getAllFortunes)

app.listen(4000, () => console.log("Server running on 4000"))