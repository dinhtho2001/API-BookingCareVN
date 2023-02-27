import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
require ('dotenv').config();

let app = express();

//config app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}))

viewEngine(app);
initWebRoutes(app);

//get port if pory === undefimed => port = 6969
let port = process.env.PORT || 6969;
app.listen(port, () => {
    console.log("Backend note js is runing... port: "+port);
});