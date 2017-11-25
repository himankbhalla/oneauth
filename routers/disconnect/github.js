/**
 * Created by himank on 24/11/17.
 */
const router = require('express').Router();
const models = require('../../db/models').models;

function DisconnectGithub(req,res){

console.log(req.user.id);
models.UserGithub.destroy({
  where: {id: req.user.id}
}).then(function(user) {
    console.log(user, "github");
}).catch((err) => console.log(err))


}


module.exports = DisconnectGithub;
