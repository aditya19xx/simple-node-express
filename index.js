const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 9000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    const display = `
    <h1> this is practice </h1
    <p>Here i am practicing node api </p>
    `
    res.send(display);
})

app.post('/users', (req, res)=>{
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body)
    res.json(newUser)
})

const users = [
    {id:0, name:"eminem", identity:"rapper", age:"43", city:"new york", country:"usa"},
    {id:1, name:"snoop dogg", identity:"rapper", age:"50", city:"new york", country:"usa"},
    {id:2, name:"jay z", identity:"rapper", age:"46", city:"new york", country:"usa"},
    {id:3, name:"g eazy", identity:"rapper", age:"33", city:"canada", country:"usa"},
    {id:4, name:"russ", identity:"rapper", age:"33", city:"new york", country:"usa"},
    {id:5, name:"divine", identity:"rapper", age:"30", city:"mumbai", country:"india"},
    {id:6, name:"emiway", identity:"rapper", age:"26", city:"mumbai", country:"usa"},
    {id:7, name:"raftaar", identity:"rapper", age:"3543", city:"delhi", country:"usa"},
    {id:8, name:"eminem", identity:"rapper", age:"43", city:"new york", country:"usa"},
    {id:9, name:"eminem", identity:"rapper", age:"43", city:"new york", country:"usa"},
    {id:10, name:"dr dre", identity:"producer", age:"65", city:"compton", country:"usa"},
]

app.get('/users', (req, res)=>{
    const search = req.query.search;
    if(search){
     const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
     res.send(searchResult)
    }
    else{
        res.send(users);
    }
    
})

app.get('/users/:id', (req, res)=>{
    const id = req.params.id;
    const user = users[id];
    res.send(user)
})



app.listen(port, ()=>{
    console.log('listening to port', port);
})