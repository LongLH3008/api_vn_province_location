import express from "express";
import { data } from "../data.js";
import cors from "cors";
import morgan from "morgan";
const app = express();
const PORT = process.env.PORT || 8800;

// Load data from data.json

app.use(cors());
app.use(morgan("tiny"));

// Set up a route to serve the data
app.get("/api/data", (req, res) => {
	res.json(data);
});

app.listen(PORT, () => {
	console.log(`listening on port ${PORT}`);
});

export default app;
