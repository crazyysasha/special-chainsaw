

const Express = require('express');

const app = Express();

app.get('/', (req, res) => {
    res.send('hello world');
});
app.get('/dashboard', (req, res) => {
    res.send('hello world in dashboard');
});

app.get(/.*man$/, (req, res) => {
    res.send('check hisrtory page');
})

app.get(/a/, (req, res) => {
    res.send('fgf');
});


const turns = [];

app.post('/turn', (req, res) => {
    console.log(req.body);
});

app.post('/', (req, res) => {
    res.send({message: 'this is post method'});
});



app.listen(3000, () => {
    console.log(`Example app listening on port 3000`)
});