const express = require("express");
// const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const app = express();

app.use(express.json())
app.use(express.urlencoded());

// const swaggerDocs = swaggerJsdoc(swaggerOptions);
const swaggerDocs = require("./swagger.json");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use("/", require("./routes/customer"));


app.listen(3000, () => {
    console.log("Listening at port 3000");
})