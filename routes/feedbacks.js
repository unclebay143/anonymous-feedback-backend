const {
  sendFeedback,
  retrieveFeedBack,
  deleteFeedback,
} = require("../controllers/feedbacks");

const router = require("express").Router();

router.post("/new", sendFeedback);
router.post("/retrieve", retrieveFeedBack);
router.put("/delete", deleteFeedback);

module.exports = router;
