const express = require("express");
const cors = require("cors");
const db = require("./models");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({ origin: "*" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api", require("./routes/apiRoutes"));

const init = async () => {
  await db.sequelize.sync();
  app.listen(PORT, () => {
    console.log(`Webserver live on port ${PORT}`);
  });
};

init();
