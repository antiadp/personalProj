var bcrypt = require("bcrypt");
const saltRounds = 7;

module.exports = {

    loginUser: (req, res)=> {
        let db = req.app.get('db')
        let {username, password} = req.body;
        console.log(username, password)
            db.find_user([username, password])
                .then(userRes => {
                    req.session.user = userRes[0]
                    // console.log("session",req.session.user)
                    res.status(200).send(userRes[0])
                })
                .catch(err => {
                    console.log('this loginUser err', err)
                    res.status(500).send(err)
                })
    },

    getUserData: (req, res) => {
        let db = req.app.get('db')
        let { id } = req.session.user;
        db.get_user([id]).then(user => {
            console.log('user on home state', user[0])
            res.status(200).send(user[0])
        }).catch(err => {
            console.log('get user @ home component failed', err)
            res.status(500).send(err);
        })
    },

    updateUser: (req, res) => {
        let { first, last, email, vtype1, vtype2, vtype3, stype1, stype2, stype3} = req.body;
        let db = req.app.get.db('db')
        db.update_user([req.user.id, first, last, email, vtype1, vtype2, vtype3, stype1, stype2, stype3])
        .then(user => res.status(200).send(user))
        .catch(err => console.log('update failed', err))
    },
    
    logout: (req, res) => {
        req.session.destroy();
        res.status(200).send(req.session);
        console.log("session ended");
      }
}