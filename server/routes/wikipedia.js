let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
// connect witht wikipedia model 

let wikipedia = require('../models/wikipedia');
let wikipediaController = require('../controller/wikipedia');

/* read operation 
get route for the wikipedia list*/

router.get('/',wikipediaController.displayWikipedia);


/* add operation 
Get route for displaying the add page  -- create operation */
router.get('/add', wikipediaController.displayAddPage);
/* post route for processing  the add page -- create operation  */
router.post('/add',wikipediaController.processAddPage);

/* edit operation 
Get route for displaying the edit operation -- update operation */
router.get('/edit/:id',wikipediaController.displayEditPage);
/*post route for displaying  the edit operation -- update operation  */
router.post('/edit/:id',wikipediaController.processEditPage);
/* delete operation */
/* Get to perform delete operation -- update Deletion */

router.get('/delete/:id',wikipediaController.performDelete);
/* Get to perform delete operation -- update Deletion */

module.exports=router;
