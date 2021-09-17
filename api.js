const express = require('express');
const bodyParser = require('body-parser');


const port = process.env.APP_PORT || 3008;
const routes = require("./routes/routes");

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:true}));

app.use("/v1/",routes)

app.listen(port, () => {
    console.log("API Started at PORT", port)
});
