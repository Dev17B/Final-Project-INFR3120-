let express = require('express');
let router = express.Router();
let Group18TeamController = require('../controller/Group18Team');


/* GET home page. */
router.get('/', Group18TeamController.displayTeamPage);

router.get('/Group18Team', Group18TeamController.displayTeamPage);


module.exports = router;
