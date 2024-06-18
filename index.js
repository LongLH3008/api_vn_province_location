import express from "express";
import fs from "fs";
import path from "path";
import cors from "cors";
import morgan from "morgan";
const app = express();
const PORT = process.env.PORT || 8800;

// Load data from data.json
const data = JSON.parse(fs.readFileSync(path.join(process.cwd(), "data.json")));

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
