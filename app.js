const express = require('express');
const app = express();

const port = process.env.PORT || 8000;
app.set('view engine','ejs');

app.get('/',async (req,res) => {
    
    
    res.render('login');
});
app.get('/:id',(req,res) => {
    res.send(req.params.id);
});

app.listen(port,() => {
    console.log(`running on port ${port}`);
});