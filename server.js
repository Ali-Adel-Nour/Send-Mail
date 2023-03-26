const express = require('express');

const appRoute = require('./routes/route.js');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/v1', appRoute);

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
});
