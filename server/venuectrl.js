module.exports = {
    getVenues: (req, res)=> {
        let db = req.app.get("db");
        console.log("fetching venues");
        // console.log('req sesh from vCtrl', req.session)
        db.get_venues()
        .then(venues => {
            res.status(200).send(venues)
            console.log("venues retrieved in ctrl")
        })
        .catch(err => {
            console.log(err, 'error getting venues')
        })
    },
    uservenues: (req,res)=> {
        let db = req.app.get("db");
        let id = req.session.user.id
        db.get_user_fav([id])
            .then(uservenues =>{
                res.status(500).send(uservenues)
            })
            
    }, 
    removeFav: (req, res) => {
        let db = req.app.get("db");
        db.unfav_venue([id])
            .then(res => {
                res.status(200).send('deleted fav venue')
            })
            .catch(err => {
                console.log('remove error:', err)
            })      
    },

    getVenPage: async (req, res) => {
        let db = req.app.get('db');
        let venue = await db.getVenPage([req.params.id])
        console.log(venue[0])
        res.status(200).send(venue[0])
    },

    favoriteVenue: (req, res) => {
        let db = req.app.get('db')
        db.fav_venue([id])
            .then(res => {
                res.status(200).send()
            })
    }
}