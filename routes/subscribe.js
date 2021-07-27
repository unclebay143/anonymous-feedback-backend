const { getAllReceivers, findReceiver } = require("../controllers/receivers");

const router = require("express").Router();

router.post("/new", findReceiver);

module.exports = router;
