const express = require('express');
const app = express();
const port= 5000;
const cors = require('cors');
const userRouter = require('./Routers/User');
const productRouter = require('./Routers/Product');
const contactusRouter = require('./Routers/Contactus');

app.use(cors({
    origin: ['http://localhost:5173']
}))

// middleware
app.use(express.json());
app.use('/user', userRouter);

app.use('/product', productRouter);

app.use('/contactus', contactusRouter);


app.listen(port, () => {
    console.log( `Server is running on port ${port}`);
});