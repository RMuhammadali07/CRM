const express = require('express');
const { connect } = require('mongoose')
const cors = require('cors');
require("dotenv").config()

const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// database configuration
async function connectToDB(){
    try {
        await connect(process.env.MONGO_URL);
        console.log("MongoDB is connected");
    }catch (error) {
        console.error("MongoDB connection failed", error.message);
    }
}
connectToDB();

// Routes

const { roles } = require("./routes/roleRout")
app.use("/roles", roles)

const { stuff } = require("./routes/stuffRout");
app.use("/stuff", stuff);

const { stuffRole } = require("./routes/stuff.role.Rout");
app.use("/stuffRole", stuffRole);

const { stage } = require("./routes/stageRout");
app.use("/stage", stage);

const { branch } = require("./routes/branchRout");
app.use("/branch", branch);

const { group } = require("./routes/groupRout");
app.use("/group", group);

const { groupStuff } = require("./routes/groupStuffRout");
app.use("/groupStuff", groupStuff);

const { lesson } = require("./routes/lessonRout");
app.use("/lesson", lesson);

const { lid_status } = require("./routes/lid_statusRout");
app.use("/lid_status", lid_status);

const { reason_lid } = require("./routes/reason_lidRout");
app.use("/reason_lid", reason_lid);

const { lid } = require("./routes/lidRout");
app.use("/lid", lid);

const { student } = require("./routes/studentRout");
app.use("/student", student);

const { studentGroup } = require("./routes/student.groupRout");
app.use("/studentGroup", studentGroup);

const { studentLesson } = require("./routes/student.lessonRout");
app.use("/studentLesson", studentLesson);

const { payment } = require("./routes/paymentRout");
app.use("/payment", payment);


// Server

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`);
});

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Express API with Swagger",
      version: "1.0.0",
      description: "API documentation using Swagger",
    },
    Servers: [
      {
        url: "http://localhost:5000",
      },
    ],
  },
  apis: ["./routes/*.js"],
};



const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))



