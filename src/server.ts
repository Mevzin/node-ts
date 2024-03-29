import express from "express";
import { AppDataSource } from "./db/data-source";
import routes from "./routes";

AppDataSource.initialize().then(() => {
    const app = express();

    app.use(express.json())

    app.use(routes)

    return app.listen(process.env.PORT)
}).catch((e) => {
    console.error(e)
})