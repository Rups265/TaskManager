const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const cookieSession = require("cookie-session");
const cookieParser = require("cookie-parser");
require("./configs/db.config");
const { toDo } = require("./routes/index.routes");
app.use(cors("*"));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cookieSession({
    name: "session",
    keys: ["ChainTech", "session", "backend"],
    maxAge: 24 * 60 * 60 * 100,
  })
);

app.use((req, res, next) => {
  if (req.body) {
    Object.keys(req.body).forEach((key) => {
      if (typeof req.body[key] === "string") {
        req.body[key] = req.body[key].trim();
      }
    });
  }
  console.log("HTTP method is " + req.method + ", URL -" + req.url);
  next();
});

app.use("/api/v1/task", toDo);
app.listen(process.env.PORT, () => {
  console.log(`server is running on PORT: ${process.env.PORT}`);
});
