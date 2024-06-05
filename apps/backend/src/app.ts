import express from "express";
import postsRoutes from "./routes/postsRoutes";
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/", postsRoutes);

export default app;
