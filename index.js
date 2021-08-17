import express from 'express';
import mongoose from 'mongoose';
import config from 'config';
import fileUpload from 'express-fileupload';
import Post from './schema/Post.js';
import router from './routers/router.js';

const DB_URL = config.get('URL');
const PORT = config.get('PORT');
const app = express();

app.use(express.json());
app.use(express.static('static'));
app.use(fileUpload({}));
app.use('/api', router);

async function startApp() {
    try {
        await mongoose.connect(DB_URL, { useUnifiedTopology: true, useNewUrlParser: true });
        app.listen(PORT, () => {console.log(`Server started on PORT ${PORT}`)})
    }
    catch (e) {
        console.log(e);
    }
}

startApp();
