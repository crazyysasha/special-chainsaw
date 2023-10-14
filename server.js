

const Express = require('express');

const app = Express();


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

const path = require('path');

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '/dist/index.html'));
// });
// app.get('/dashboard', (req, res) => {
//     res.send('hello world in dashboard');
// });

// app.get(/.*man$/, (req, res) => {
//     res.send('check hisrtory page');
// })

// app.get(/a/, (req, res) => {
//     res.send('fgf');
// });


// const turns = [];

// app.post('/turn', (req, res) => {
//     console.log(req.body);
// });

// app.post('/', (req, res) => {
//     res.send({message: 'this is post method'});
// });





const board = {
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
    7: null,
    8: null,
    9: null,
};

app.get('/turn', (request, response) => {
    response.json(board);
});


app.post('/turn', (request, response) => {
    console.log(request.body);
    // board[]
    response.json(board);
});


app.listen(81, () => {
    console.log(`Example app listening on port 81`)
});