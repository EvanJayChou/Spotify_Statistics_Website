const express = require('express')
const app = express();
const PORT = process.env.PORT || 5000;

//Middleware and routes

app.listen(PORT, () => {
    console.log('Server is running on port ${PORT}')
})