const express = require("express");

const morgan = require("morgan");
const mysql = require("mysql");
const path = require("path");
const fileUpload = require('express-fileupload');
const myConnection = require("express-myconnection");
const port = process.env.PORT || 3000;

/* const storage = multer.diskStorage({
  destination:path.join(__dirname,'public/uploads'),
  filename:(req, file, cb) => {

    cb(null, file.originalname);
  }
}) */
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(fileUpload());
const routers = require("./routes/contactos");
app.use(morgan("dev"));
/* app.use(formidable.parse( {keepExtension:true})); */
app.use(
  myConnection(
    mysql,
    {
      host: "localhost",
      user: "root",
      password: "",
      port: 3306,
      database: "contactos",
    },
    "single"
  )
  );
/* app.use(
  multer({
    storage,
    dest: path.join(__dirname, "public/uploads"),
  }).single("imagencontacto")
); */
  
  app.use("/", routers);
  
  app.use(express.static(path.join(__dirname, "public")));
app.listen(port, () => {
  console.log(`Server on port ${port}`);
});
