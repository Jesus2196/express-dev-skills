let express = require('express');
let router = express.Router();
let skillCtrl = require("../controllers/skills");

/* GET users listing. */
router.get('/', skillCtrl.index);
router.get("/:id", skillCtrl.show);

module.exports = router;