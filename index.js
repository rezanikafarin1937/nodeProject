const express = require("express");
const cors = require("cors");

const app = express();

const pagesRoute = require("./router/web/PagesRoutes");
const UsersRoutes = require("./router/api/UsersRoutes");

app.use(cors({
  origin: "http://localhost:3000",
  
}));

app.use(express.json());

app.use(express.static("public"));

app.use("/api/users", UsersRoutes);
app.use("/",pagesRoute)

app.listen(8000, () => {
  console.log("Server running on port 8000");
});

