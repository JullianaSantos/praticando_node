const express = require("express");
const app = express();
const UserModel = require("./src/database/models/user.models");
const dotenv = require("dotenv");
const connectToDatabase = require("./src/database/connect");

dotenv.config();

connectToDatabase();
app.use(express.json());

app.post("/livros", async (req, res) => {
  try {
    const user = await UserModel.create(req.body);

    res.status(201).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
app.get("/livros", async (req, res) => {
    try {
    
      const livros = await UserModel.find({})
      return res.status(200).send(livros);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  });

app.get("/livros/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const user = await UserModel.findById(id);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

app.put("/livros/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true });

    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.delete("/livros/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findByIdAndRemove(id);

    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

const port = 3333;
app.listen(3333, () => console.log(`Rodando na porta ${port}`));
