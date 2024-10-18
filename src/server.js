const app   = require('./app');

app.listen(process.env.PORT, () => {
    console.log('### VOCÊ ESTÁ NA PORTA ' + process.env.PORT + ' ###');
});