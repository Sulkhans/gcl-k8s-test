const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("TEST - Hello from updated NodeApp 1!" + new Date(0));
});

app.listen(PORT, () => {
  console.log(`NodeApp1 running on port ${PORT}`);
});
