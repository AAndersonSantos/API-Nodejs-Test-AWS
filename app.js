require("dotenv").config();
const express = require("express");
const port = process.env.SERVER_PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));

const routes = require("./src/routes/route");

app.use(routes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
