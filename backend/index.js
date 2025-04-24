const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT; 








app.listen(port, async () => {
    try {
        console.log(`server is running on port ${port}`);
    } catch (error) {
        console.log(error);
    }
});
