const express = require('express');
const app = express();
const port = 3000


// // Middelware
// const middleware = (req, res, next) => {
//     console.log("Hello my middleware");
//     next();
// }

app.get('/', (req, res) => {
    res.send(`Hello World from the server`);
});
console.log("Subscribe my channel");

// app.get('/about', middleware, (req, res) => {
//     console.log("Hello my About");
//     res.send(`Hello About World from the server`);
// });

app.get('/contact', (req, res) => {
    res.send(`Hello Contact World from the server`);
});

app.get('/home', (req, res) => {
    res.send(`Hello signIn World from the server`);
});

app.listen(3000, () => {
    console.log(`Example app listening of port`);
})