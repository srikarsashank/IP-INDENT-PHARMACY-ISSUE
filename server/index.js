import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import indent from './routes/indent.js';
import raisedindent from './routes/raisedindent.js'

const app = express();



app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use('/indent', indent)
app.use('/raisedindent', raisedindent)
app.use('/raisedindent/issue', raisedindent)




const CONNECTION_URL = 'mongodb+srv://srikar:srikar03@ip-indent.q7ufk.mongodb.net/users?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port : ${PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);
