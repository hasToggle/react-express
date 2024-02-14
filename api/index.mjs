import fetch from "node-fetch";
import express from "express";

const app = express();

app.use(express.json());

let calls = 0;

app.set("port", 8080);

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
