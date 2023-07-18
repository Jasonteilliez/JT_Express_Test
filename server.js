import express from "express";
import expressLayouts from "express-ejs-layouts";
import { fileURLToPath } from "url";
import { join } from "path";
import mongoose from "mongoose";
import { connectdb } from "./src/services/mongoose.js";

// Import router
import { router as indexRouter } from "./src/routes/index.js";

// App
const root = fileURLToPath(new URL(".", import.meta.url));

const app = express();

// Database Connect
connectdb();
const db = mongoose.connection;
db.on("error", (error) => {
  console.error(error);
});
db.once("open", () => {
  console.log("Connected to Mongoose");
});

//
app.set("view engine", "ejs");
// app.set("views", join(root, "views"));
app.set("layout", "layouts/layout");
app.use(expressLayouts);
app.use(express.static(join(root, "public")));

app.use("/", indexRouter);

app.listen(process.env.PORT || 3000);
