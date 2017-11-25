/**
 * Created by himank on 24/11/17.
 */
const router = require('express').Router();
const models = require('../../db/models').models;

function DisconnectFacebook(req,res){

console.log(req.user.id);
models.UserFacebook.destroy({
  where: {id: req.user.id}
}).then(function(user) {
    console.log(user, "facebook");
}).catch((err) => console.log(err))


}


module.exports = DisconnectFacebook;
