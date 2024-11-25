const express = require('express');

const app = express();


app.use((req,res,next)=>{
    console.log(`Request Method: ${req.method}, URL: ${req.url}`);
    next();
})

app.use('/user', (req, res, next) => {
    console.log('User route middleware');
    next();
});

// Final Route Handler
app.get('/user', (req, res) => {
    res.send('User Page');
});

// Error-Handling Middleware
app.use((err, req, res, next) => {
    res.status(500).send('Internal Server Error');
});
app.listen(3000, ()=>{
    ;console.log("Server Is running On the 3000");
    
})