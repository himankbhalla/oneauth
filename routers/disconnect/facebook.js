/**
 * Created by himank on 24/11/17.
 */
const router = require('express').Router();
const models = require('../../db/models').models;

function DisconnectFacebook(req,res) {

  models.UserFacebook.destroy({
    where: {userId: req.user.id}
  })
  .then(function(result) {
      console.log(user, "facebook");
      // return res.redirect('/users/me');
    })
    .catch((err) => console.log(err))
}


module.exports = DisconnectFacebook;
