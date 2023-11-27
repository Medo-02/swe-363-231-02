const express = require('express');
const path = require('path');
const routes = require('./router');
const app = express();

app.use(express.static(path.join(__dirname)));

// Define routes
app.get('/', routes);

app.get('/index-ar', routes);

app.get('/Suggest', routes);

app.get('/Suggest-ar', routes);

app.get('/contact', routes);

app.get('/contact-ar', routes);

app.get('/confirm', routes);

app.get('/confirm-ar', routes);

app.get('/cat-fact', routes);


// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
