/**
 * Created by himank on 24/11/17.
 */
const router = require('express').Router();
const models = require('../../db/models').models;

function DisconnectTwitter(req,res){

console.log(req.user.id);
models.UserTwitter.destroy({
  where: {id: req.user.id}
}).then(function(user) {
    console.log(user, "twitter");
}).catch((err) => console.log(err))


}


module.exports = DisconnectTwitter;