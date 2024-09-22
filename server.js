import "dotenv/config";
import express from "express";

const app = express();
const port = process.env.SERVER_PORT;
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`server Started on : ${port}`);
});
