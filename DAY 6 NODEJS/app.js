const os = require('os');// importing the os package
const fs = require('fs');// importing the fs package
const server = require('http');// importing the http package
const express = require('express');// importing the express package
// console.log(os.arch(),os.freemem(),os.homedir(),os.hostname());

// fs.readFile('names.txt',(err,data)=>{
//     if(err){
//         console.log(err);

//     }else{
//         console.log(data.toString());
//     }
// })

// fs.writeFile('names.txt','Hello World',(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log('File written successfully');
//     }
// })

// myServer = server.createServer((req,res)=>{
//     if(req.url === '/start'){
//         res.end("Started")
//     }
// })

// myServer.listen(8000,()=>{
//     console.log('Server is running on port 8000');
// })

const app = express();
app.use(express.json());
app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});


app.post('/login',(req,res)=>{
    const {username,password} = req.body;
    // console.log(username,password);
    if (username === 'admin' && password === 'admin') {
        res.send('Login successful');
    }else {
        res.send('Login failed');
    }
})
app.listen(8000, () => {
    console.log('Server is running on port 8000');
});

