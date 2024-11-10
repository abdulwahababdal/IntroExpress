const express = require("express");

const app = express();
app.get("/", (request, response) => {
  response.json({ message: "Abdal" });
});
app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
