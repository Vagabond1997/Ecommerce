import express from "express";
const app = express();
const port = process.env.Port || 800;
import router from './router/router.js';
import authRouter from './router/authRouter.js';
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use('/register',router );
app.use('/login', authRouter);
app.get("/healthcheck", function (req, res, next) {
    return res.status(200).json('Health  Check OK');
});
app.use(router);
app.listen(port, console.log('port is running in http://localhost:'+port))