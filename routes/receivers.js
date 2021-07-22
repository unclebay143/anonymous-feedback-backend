const { getAllReceivers, findReceiver } = require("../controllers/receivers");

const router = require("express").Router();

router.get("/all", getAllReceivers);
router.post("/find", findReceiver);

module.exports = router;
