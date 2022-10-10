const router = require("express").Router();
const { User } = require("../model/UserDataSchema");

router.route("/").post((req, res) => {
    const logUser = req.body;

    User.findOne({ email: logUser.email })
        .then((doc, err) => {
            (err) ?
                res.status(400).json({ isUserLoggedIn: false, isCorrectPassword: false, isNetworkError: true })
                :
                res.json(doc)
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json({ isUserLoggedIn: false, isNetworkError: true });
        });
});

module.exports = router;