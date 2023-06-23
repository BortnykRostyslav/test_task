const express= require('express');

const pingRouter = require('./api/ping/ping.router');
const dogsRouter = require('./api/dogs/dogs.router');
const { PORT} = require('./configs/variables');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/dogs', dogsRouter);
app.use('/ping', pingRouter);
app.use('*', _notFoundError);

app.listen(PORT, ()=> {
    console.log('Listen', PORT);
});

function _notFoundError(req, res, next) {
    res.status(404).json('NOT FOUND');
}
