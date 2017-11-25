/**
 * Created by championswimmer on 10/03/17.
 *
 * This is the /oauth path
 */
const router = require('express').Router();
const OauthMiddewares = require('../oauth/oauthserver').Middlewares;

router.get('/authorize', OauthMiddewares.authorizationMiddleware);
router.get('/showdialog', OauthMiddewares.showdialog);
router.post('/dialog/authorize/decision', OauthMiddewares.decisionMiddleware);
router.post('/token', OauthMiddewares.tokenMiddleware);

module.exports = router;
