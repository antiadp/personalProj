require('dotenv').config()

const   express = require('express')
    ,   massive = require('massive')
    ,   session = require('express-session')
    ,   bodyParser = require('body-parser')
    ,   ctrl = require('./venuectrl')
    ,   isAuthenticated = require('./middlewares/isAuthenticated')
    ,   app = express();

app.use(bodyParser.json());
// -----> // app.use(USE ISAUTHENTICATED middleware here) <-------

const {
    CONNECTION_STRING,
    SERVER_PORT,
    SECRET,
    CALLBACK_URL,
    CLIENT_SECRET,
    CLIENT_ID,
    DOMAIN,
    SUCCESS_REDIRECT,
    FAILURE_REDIRECT
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

app.use(passport.initialize());
app.use(passport.session());

passport.use(new Auth0Strategy({
    domain: DOMAIN,
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    callbackURL: CALLBACK_URL,
    scope: 'openid profile'
}, function(accessToken, refreshToken, extraParams, profile, done){
    const db = app.get('db')
    // console.log('auth0 strat before find_user')
    db.find_user([profile.id]).then(userRes => {
        console.log("auth0 strat after find_user" )
        if(!userRes[0]) {
            db.create_user([
                profile.name.givenName,
                profile.name.familyName,
                profile.user_id,
                `https://robohash.org/${profile.user_id}`
            ]).then(newUser => {
                return done(null, newUser[0].id)
            })
        }else {
            // console.log('auth0 strat after find_user-- user found ')
            return done(null, userRes[0].id)
        }
    }).catch(err => {
        // console.log("auth0 strat error", err)
    })
}));


passport.serializeUser((profile, done) => {
    // console.log('serialize')
    done(null, profile);
});
            // let user = {
            //     lastName: profile.name.familyName,
            //     firstName: profile.name.givenName,
            //     user_id: profile.user_id
            // }

passport.deserializeUser(function(user, done){
    const db = app.get('db')
    // console.log("deserialized")
    // Attempt to find user in your Database (helousers table) using user.user_id
    db.find_session(user).then(res => {
        // console.log('deserialized: found sesh')
        done(null, res[0])
    }).catch(err => {
        console.log('deserialize error is:', err)
    })
});


app.get('/auth', passport.authenticate('auth0'));
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: SUCCESS_REDIRECT,
    failureRedirect: FAILURE_REDIRECT
}));

app.get('/auth/authenticated', (req, res)=> {
    console.log('auth0 endpt check')
    if (req.isAuthenticated()) {
        res.send(req.user)
    } else {
        res.sendStatus(403)
    }
  
})

app.listen(SERVER_PORT, ()=> console.log(`Kicking the: ${SERVER_PORT}`));