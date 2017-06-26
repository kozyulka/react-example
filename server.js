const express = require('express');

const app = express();
const port = process.env.PORT || 8100;

app.use( (req, res, next) => {
    if (req.headers['ex-forwarded-proto'] === 'http') {
        next();
    } else {
        res.redirect('http://' + req.hostname + req.url);
    }
});

app.use(express.static('build'));

app.listen(port, () => {
    console.log("Launching server from port" + port)
});