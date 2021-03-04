const express = require("express");
const router = express.Router();
const bouncer = require("express-bouncer")(120000, 1.8e6, 5);

bouncer.blocked = function (req, res, next, remaining) {
  res.send(
    429,
    "Too many requests have been made, " +
      "please wait " +
      remaining / 1000 +
      " seconds"
  );
};

const userCtrl = require("../controllers/user");
const regex = require("../middleware/regex");

router.post("/signup", regex.authValidation, userCtrl.signup);
router.post("/login", regex.authValidation, bouncer.block, userCtrl.login);

module.exports = router;
