import express from "express";
import bodyParser from "body-parser";

import userRoutes from "./routes/userRoutes.js";

const app = express();
const PORT = 3500;

app.use(bodyParser.json());

app.use("/users", userRoutes);

app.get("/", (req, res) => {
  console.log("test");
  res.send("Hello from home page");
});

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT} `)
);
