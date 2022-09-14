const express = require("express");
const app = express();
const port = 3000;
const user = require("./routes/user");

app.use("/user", user);
app.get("/", (req, res) => {
  console.log("hello");
  res.send("hello");
});

app.listen(port, () => {
  console.log("Running on port 3000");
});
