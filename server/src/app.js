import express from "express";
import expressEjsLayouts from "express-ejs-layouts";
import routes from "./routes/pages.js";
import api from "./routes/api.js";
import Db from "./db.js";

const app = express();

Db.dbInit();
app.use(expressEjsLayouts);
app.use(express.json());
app.use(express.static("./src/public"));

app.use(routes);
app.use(api);

app.set("view engine", "ejs");
app.set("layout", "../views/layouts/index.ejs");

app.use((req, res) => {
  res.status(404).send("<h1>Page not found ;(</h1>");
});

export default app;
