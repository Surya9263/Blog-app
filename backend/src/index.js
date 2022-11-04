const express = require("express");
const dotenv = require("dotenv");
const dbConnect = require("./config/db");
const authRoter = require("./routes/auth");
const userRouter = require("./routes/users");

dotenv.config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/auth", authRoter);
app.use("/api/user", userRouter);

app.listen(8080, async () => {
  await dbConnect();
  console.log("server started on port 8080");
});
