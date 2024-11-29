import Express from "express";
import bodyParser from "body-parser";
import ConnectDb from "./Database/db.js";
import LoginRouter from "./Routes/LoginRouter.js";
import RegisterRouter from "./Routes/RegisterRouter.js";
import UserRoutes from "./Routes/UserRoutes.js";

const app = Express();
const port = 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("hello from first page");
});

app.use(LoginRouter);
app.use(RegisterRouter);
app.use(UserRoutes);

ConnectDb().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
