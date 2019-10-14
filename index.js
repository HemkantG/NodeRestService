const express = require('express');
const app = express();

app.get('/',(req, res)=>{
    res.send('Hello from api updated')
})

app.listen(3000,()=>{
    console.log('Listening on 3000')
})
