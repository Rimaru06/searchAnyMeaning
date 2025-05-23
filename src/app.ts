import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import errorHandler from './middleware/errorHandler.js';
import wordRoutes from './routes/wordRoute.js';

const app = express();

app.use(express.json());
app.use(helmet());
app.use(morgan("dev"));
app.use(cors());
// @ts-ignore
app.get("/", (req , res) =>  {
  return res.json({ message: "server is running fine" });
});

app.use('/api/v1/',wordRoutes);


app.use(errorHandler);
export default app;
