const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello from updated NodeApp 2!" + new Date());
});

app.listen(PORT, () => {
  console.log(`NodeApp2 running on port ${PORT}`);
});
