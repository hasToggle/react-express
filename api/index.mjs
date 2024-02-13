import fetch from "node-fetch";
import express from "express";
import bodyParser from "body-parser";

const app = express();

let calls = 0;

app.set("port", 8080);

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/api", async (req, res) => {
  const response = await fetch("https://api.github.com/users/github");
  const data = await response.json();
  res.json(data);
});

app.get("/api/data-for-react", async (req, res) => {
  calls++;
  res.json({ topic: "& Express", calls: calls });
});

app.listen(app.get("port"), () => {
  console.log(`Node app listening on port ${app.get("port")}`);
});
