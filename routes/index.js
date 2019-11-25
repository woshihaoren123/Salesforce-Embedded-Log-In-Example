var express = require('express');
var router = express.Router();

const COMMUNITY_URL = process.env.SALESFORCE_COMMUNITY_URL;
const APP_ID = process.env.SALESFORCE_CLIENT_ID;
const APP_SECRET = process.env.SALESFORCE_CLIENT_SECRET;
const OAUTH_CALLBACK_URL = process.env.SALESFORCE_CALLBACK_URL;
const HOSTED_APP_URL = process.env.SALESFORCE_HEROKUAPP_URL;
const COMMUNITY_MODE = process.env.SALESFORCE_MODE;

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Express',
        community_url: COMMUNITY_URL,
        app_id: APP_ID,
        callback_url: OAUTH_CALLBACK_URL,
        community_mode: COMMUNITY_MODE
    });
});

module.exports = router;