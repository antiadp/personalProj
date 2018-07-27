var bcrypt = require("bcrypt");
const saltRounds = 7;

module.exports = {

    loginUser: (req, res)=> {
        let db = req.app.get('db')
        let {username, password} = req.body;
            db.find_user([username, password])
                .then(user => {
                    console.log('user obj on sesh', user[0])
                    // req.session.user = user[0]
                    req.session.user = user[0]
                    console.log(user[0])
                    res.status(200).send(user[0])
                })
                .catch(err => {
                    console.log('this loginUser err', err)
                    res.status(500).send(err)
                })
    },

    getUserData: (req, res) => {
        let db = req.app.get('db')
        let { userId } = req.session;
        db.get_user([userId]).then(user => {
            res.status(200).send(user)
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