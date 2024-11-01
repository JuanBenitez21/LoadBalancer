const express = require('express');

//Server 1
const app_one = express();
app_one.get('/',(req, res)=>{
    res.send('Server 1 is using');
});
app_one.listen(8001, ()=>{
    console.log('Server 1 is running on port 8001');
});

//Server 2
const app_two = express();
app_two.get('/',(req, res)=>{
    res.send('Server 2 is using');
});
app_two.listen(8002, ()=>{
    console.log('Server 2 is running on port 8002');
});

//Server 2
const app_three = express();
app_three.get('/',(req, res)=>{
    res.send('Server 3 is using');
});
app_three.listen(8003, ()=>{
    console.log('Server 3 is running on port 8003');
});