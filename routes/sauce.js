const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");

const sauceCtrl = require("../controllers/sauce");
const regex = require("../middleware/regex");

router.get("/", auth, sauceCtrl.getAllSauces);
router.post("/", regex.sauceValidation, auth, multer, sauceCtrl.createSauce);
router.post("/:id/like", auth, sauceCtrl.voteSauce);
router.get("/:id", auth, sauceCtrl.getOneSauce);
router.put("/:id", regex.sauceValidation, auth, multer, sauceCtrl.modifySauce);
router.delete("/:id", auth, sauceCtrl.deleteSauce);

module.exports = router;