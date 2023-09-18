const express = require("express");
const path = require('path');

const app = express();
app.set("port", process.env.PORT || 3000);

app.get('/', (req,res)=> {
    //res.send("hello");
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(app.get('port'), () => {
    console.log(app.get('post'), '번 포트에서 대기 중');
});