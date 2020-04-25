
const router = require('express').Router();
const db = require('../config/database');
const User = require('../Models/UserModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.post('/signUp', (req, res) => {
    const data = req.body.data;
    //CHECKING IF THE USERNAME ALREADY TAKEN
    User.findOne({
        where:{
            username: data.username,
        }
    }).then( username => {
        if(username != null){
            return res.status(400).send('This username already taken.');
        }
        else{
            //HASH THE PASSWORD
            const salt = bcrypt.genSaltSync(10);
            const hashPass = bcrypt.hashSync(data.password, salt);
            
            console.log(hashPass)
            //CREATE NEW USER
            var newUser = new User({
                username: data.username,
                password: hashPass
            });

            newUser.save(function (err) {
                if (err) return console.log(err);
                const token = jwt.sign({id: newUser.id}, process.env.TOKEN_SECRET);
                res.send({
                    token: token,
                    user: {
                        username: newUser.username,
                        _id: newUser._id
                    },
                });
            });          
        }
    }) 
});

router.post('/login', async (req, res) => {

    const data = req.body.data;

    //CHECKING IF THE USERNAME IS VALID
    User.findOne({ username: data.username }, function (err, user) {
        if(err) console.log(err)

        if(!user) return res.status(200).send({loginFailed: true});
        else{
            //Checking is password correct
            bcrypt.compare(data.password , user.password).then( validPass => {
                if(!validPass){
                    return res.status(200).send({loginFailed: true});
                }
                else{
                    //CREATE AND ASSING A TOKEN
                    const token = jwt.sign({id: user.id}, process.env.TOKEN_SECRET);
                    res.status(200).send({
                        token: token,
                        user: {
                            _id: user._id,
                            username: user.username
                        }
                    });
                }
            });
        }   
    });
});

router.post('/checkUsername', async (req, res) => {
    //CHECKING IF THE USERNAME IS VALID
    User.findOne({ username: req.body.username }, function (err, user) {
        if(err) console.log(err)
        if(!user) return res.status(200).send({isValid: true});
        else return res.status(200).send({isValid: false})   
    });
});

router.post('/verifyToken', async (req, res) => {

    const token = req.body.data.token;
    //CHECKING IF THE TOKEN IS VALID
    try{
        verified = jwt.verify(token, process.env.TOKEN_SECRET);
        res.status(200).send({verified: true});
    }catch(err){
        console.log(err)
        res.status(200).send({verified: false});
    }
});


module.exports = router;