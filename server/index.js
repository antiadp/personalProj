require('dotenv').config()

const   express = require('express')
    ,   massive = require('massive')
    ,   session = require('express-session')
    ,   bodyParser = require('body-parser')
    ,   vCtrl = require('./venuectrl')
    ,   uCtrl = require('./userctrl')
    ,   isAuthenticated = require('./middlewares/isAuthenticated')
    ,   app = express();

app.use(bodyParser.json());
// -----> // app.use(USE ISAUTHENTICATED middleware here) <-------

const {
    CONNECTION_STRING,
    SERVER_PORT,
    SECRET,
    CLIENT_SECRET
} = process.env

massive(CONNECTION_STRING).then(db => {
    console.log('db established connection')
    app.set('db', db) 
    
});

app.use(session({
    secret: SECRET,
    resave: false,
    saveUninitialized: true
}));

app.get('/isAuthenticated')

app.post('/auth/user', uCtrl.loginUser);
app.put('/updateuser', uCtrl.updateUser);
app.get('/getuserdata', uCtrl.getUserData);

app.get('/api/getVenues', vCtrl.getVenues);

app.get('/venue/:id', vCtrl.getVenPage)

app.get('./uservenues', vCtrl.uservenues);
app.delete('./removeFav', vCtrl.removeFav);


app.listen(SERVER_PORT, ()=> console.log(`Kicking the: ${SERVER_PORT}'s`));
